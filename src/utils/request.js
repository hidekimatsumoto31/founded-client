import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
})

export default request
