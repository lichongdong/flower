import axios from 'axios'
// import router from '../router'
import { Toast } from 'vant'
let platform = 'h5'
let userId = '0001'
const timeout = 60000
const baseURL = '/'

// 创建实例
let request = axios.create({
  timeout, // 请求超时时间
  baseURL,
})
/**
 * @desc 添加token
 * @param { Object } config axios 请求config
 * @return { Object } config
 */
const addToken = config => {
  let token = localStorage.getItem('$token')
  config.headers.Authorization = `Bearer ${token}`
  return config
}
/**
 * @description 添加全局参数
 * @param { Object } config axios 请求config
 * @param { Object } config.headers 请求头信息
 * @param { Object } config.body  请求体
 * @param { String } config.url 请求地址
 * @return { Object } config
 * @example appParams(config)
 */
const appParams = config => {
  const params = {
    platform,
    userId: localStorage.getItem('$user_id') || userId
  }
  let method = config.method.toLowerCase() == 'post' ? 'data' : 'params'
  // methdo == post ， 使用data 传递参数给服务端，内容会在reqrest.body
  // method == get, put, delete // parma， axios会自动讲对象拼接到url
  
  config[method] = {
    // 需要做参数合并，
    ...params,
    ...config[method]
  }
  return config
}
/**
 * @desc axios 请求统一处理
 */
request.interceptors.request.use(config => {
  // 使用promise 实现流程拆分，方便拓展
  return Promise.resolve(config)
    .then(appParams)
    .then(addToken)
})

/**
 * @desc 检测网络请求
 * @param {*} response 
 * @returns 
 */
const checkNetStatus = response => {
  // 解构status
  const {  status, message } = response
  // 错误code
  const errorCodes = [
    404, 
    403,
    401,
    500,
  ]
  // 如果有错误，弹出报错信息
  if (errorCodes.includes(status)) {
    Toast({
      type: 'fail',
      message
    })
  }
  return response
}

/**
 * @desc 检测响应code，判断是否成功
 * @param { Object } response 
 * @return { Object } response -axios response
 */
const checkCode = (response) => {
  // 解构服务端返回的状体以及msg
  const {
    errorCode,
    message
  } = response.data
  // 请求成功code
  const successCodes = [
    0, // 成功
    304
  ]
  // 取反 则是请求不成功的情况
  if (!successCodes.includes(errorCode)) {
    Toast({
      type: 'fail',
      message
    })
  }
  return response
}
/**
 * @desc 处理响应的数据
 * @param {*} response 
 * @returns 
 */
const initResData = response => {
  //通常情况直接返回response.data
  // 关键字
  // let reg = /(download|down)/ig;
  // 判断如果说是url保函以上关键字，说明是文件导出，直接返回文件流
  // if(reg.test(response.config.url) || response.request.responseType == 'blob') {
  //   return response
  // }

  return response.data
}
/**
 * @desc 响应拦截
 */
request.interceptors.response.use(response => {
  return Promise.resolve(response)
  // 网络错误
  .then(checkNetStatus)
  // 服务端返回错误
  .then(checkCode)
  // 数据处理
  .then(initResData)
  
})
// 导出请求对象
export default request



