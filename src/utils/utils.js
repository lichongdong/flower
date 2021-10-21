import crypto from 'crypto-js'

/**
 * key和iv字符串中不能有0，否则会导致无法解密
 * key 和 iv 可以相同
 */
const key = crypto.enc.Utf8.parse('1234123412ABCDEF') // 加密用的密钥
const iv = crypto.enc.Utf8.parse('ABCDEF1234123412') // 偏移量
// 加密
/**
 * @desc 加密方法
 * @param { String|Number } word 需要加密的内容
 * @return { string } 加密后的内容
 */
export const Encrypt = word => {
  let srcs = crypto.enc.Utf8.parse(word)
  let encryped = crypto.AES.encrypt(srcs, key, {
    iv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7
  })
  return encryped.ciphertext.toString().toUpperCase()
}
// 解密
/**
 * @desc aes 解密
 * @param { string } word 需要解密的字符串
 * @return { string } 解密后字符串
 */
export const Decrypt = word => {
  let encrypetHexStr = crypto.enc.Hex.parse(word)
  let srcs = crypto.enc.Base64.stringify(encrypetHexStr)
  console.log('srcs', srcs, 'word', word);
  let decript = crypto.AES.decrypt(srcs, key, {
    iv,
    mode: crypto.mode.CBC,
    padding: crypto.pad.Pkcs7
  })
  console.log('decript', decript)
  return decript.toString(crypto.enc.Utf8).toString()

}
/**
 * @desc 格式化金额
 * @param {number} val 需要格式化金额
 * @returns 
 */
export const formatPrice = function(val = 0){

  //金额转换 分->元 保留2位小数 并每隔3位用逗号分开 1,234.56
  let str = (val- 0).toFixed(2);
  let intSum = str.substring(0,str.indexOf('.')).replace( /\B(?=(?:\d{3})+$)/g, ',' );//取到整数部分
  let dot = str.substring(str.length,str.indexOf('.'))//取到小数部分搜索
  let ret = intSum + dot;
  return ret;
}  

