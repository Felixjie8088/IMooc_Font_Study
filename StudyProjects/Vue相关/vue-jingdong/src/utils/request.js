import axios from 'axios'

const aInstance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/73d2e1d675dba577dd2ebe0f1380e473/jd',
  timeout: 10000
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    aInstance.get(url, { params }).then((res) => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    aInstance.post(url, data, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then((res) => {
      resolve(res.data)
    }, err => {
      reject(err)
    })
  })
}
