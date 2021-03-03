import axios from 'axios'

const baseURL = 'http://123.207.32.32:8000/api/hy'

export function request(config) {
  const instance = axios.create({
    baseURL: baseURL
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {})

  instance.interceptors.response.use(res => {
    return res
  }, err => {})

  return instance(config)
}