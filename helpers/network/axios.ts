import { default as _axios } from 'axios';

export const axios = _axios.create({
  // url: 'http://localhost:4444',
  // baseURL: 'http://10.0.2.2:1234',
  baseURL: 'http://192.168.10.5:1234',
  timeout: 5000 
});
