import axios from 'axios';

const HttpClient = axios.create({
  withCredentials: true,
  timeout: 15000,
  baseURL: '/api'
})

export { HttpClient };
