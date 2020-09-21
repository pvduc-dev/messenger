import axios from 'axios';

export const http = axios.create({
  timeout: 15000,
  withCredentials: true,
});
