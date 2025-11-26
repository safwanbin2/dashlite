/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
 * since the last time the debounced function was invoked.
 * 
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @param options - The options object
 * @returns Returns the new debounced function
 * 
 * @example
 * const debounced = debounce(() => console.log('Hello'), 1000)
 * debounced()
 * debounced()
 * debounced()
 * // => 'Hello' (only once after 1000ms)
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 0,
  options: {
    leading?: boolean
    trailing?: boolean
    maxWait?: number
  } = {}
): T & { cancel: () => void; flush: () => void } {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  
  const { leading = false, trailing = true, maxWait } = options
  
  let timerId: NodeJS.Timeout | undefined
  let lastCallTime: number | undefined
  let lastInvokeTime = 0
  let lastArgs: any[] | undefined
  let lastThis: any
  let result: any
  
  function invokeFunc(time: number) {
    const args = lastArgs!
    const thisArg = lastThis
    
    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }
  
  function leadingEdge(time: number) {
    lastInvokeTime = time
    timerId = setTimeout(timerExpired, wait)
    return leading ? invokeFunc(time) : result
  }
  
  function remainingWait(time: number) {
    const timeSinceLastCall = time - lastCallTime!
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall
    
    return maxWait !== undefined
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting
  }
  
  function shouldInvoke(time: number) {
    const timeSinceLastCall = time - (lastCallTime || 0)
    const timeSinceLastInvoke = time - lastInvokeTime
    
    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
    )
  }
  
  function timerExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    timerId = setTimeout(timerExpired, remainingWait(time))
  }
  
  function trailingEdge(time: number) {
    timerId = undefined
    
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined
    return result
  }
  
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId)
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
  }
  
  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now())
  }
  
  function debounced(this: any, ...args: any[]) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)
    
    lastArgs = args
    lastThis = this
    lastCallTime = time
    
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
      if (maxWait !== undefined) {
        timerId = setTimeout(timerExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait)
    }
    return result
  }
  
  debounced.cancel = cancel
  debounced.flush = flush
  
  return debounced as any
}
