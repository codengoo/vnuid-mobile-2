import {default as _axios} from 'axios';

export const axios = _axios.create({
  // url: 'http://localhost:4444',
  baseURL: 'http://10.0.2.2:4444',
  timeout: 5000 
});
