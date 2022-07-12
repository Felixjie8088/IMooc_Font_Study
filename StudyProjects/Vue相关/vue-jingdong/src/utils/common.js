// 函数防抖
let lock = false
let Timer
const TimerLock = (fn, time) => {
  if (lock) return
  lock = true
  clearTimeout(Timer)
  Timer = setTimeout(fn, time)

  setTimeout(() => {
    lock = false
  }, time)
}
export { TimerLock }
