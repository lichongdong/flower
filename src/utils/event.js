const event = {
  // 保存事件回调
  callbacks: {},
  // $on('updateRefresh', refreshing => {})
  /**
   * @desc 订阅事件
   * @param { string } key 事件名称
   * @param { Function } fn 事件回调函数
   */
  $on(key, fn = () => {}) { // 订阅事件
    if (this.callbacks[key]) {
      this.callbacks[key].push(fn)
    } else {
      this.callbacks[key] = [fn]
    }
  },
  // $emit('updateRefresh', false)
  /**
   * @desc 发布事件
   * @param { string } key 事件名称
   * @param  {...any} args 任意参数
   */
  $emit(key, ...args) {
    // 拿到所有的监听函数
    let callbacks = this.callbacks[key]
    if (Array.isArray(callbacks) && callbacks.length) {
      try {
        callbacks.forEach(fn => fn(...args))
      } catch (error) {
        // 有错误 将错误信息打印
        console.error(error);
      }
      
    }
  }
}


export default event