/**
 * Creates a throttled function that only invokes func at most once per every wait milliseconds.
 * 
 * @param func - The function to throttle
 * @param wait - The number of milliseconds to throttle invocations to
 * @param options - The options object
 * @returns Returns the new throttled function
 * 
 * @example
 * const throttled = throttle(() => console.log('Hello'), 1000)
 * throttled()
 * throttled()
 * throttled()
 * // => 'Hello' (only once immediately, then once after 1000ms if called again)
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 0,
  options: {
    leading?: boolean
    trailing?: boolean
  } = {}
): T & { cancel: () => void; flush: () => void } {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  
  const { leading = true, trailing = true } = options
  
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
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastInvoke
    
    return timeWaiting
  }
  
  function shouldInvoke(time: number) {
    const timeSinceLastCall = time - (lastCallTime || 0)
    const timeSinceLastInvoke = time - lastInvokeTime
    
    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      timeSinceLastInvoke >= wait
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
  
  function throttled(this: any, ...args: any[]) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)
    
    lastArgs = args
    lastThis = this
    lastCallTime = time
    
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait)
    }
    return result
  }
  
  throttled.cancel = cancel
  throttled.flush = flush
  
  return throttled as any
}
