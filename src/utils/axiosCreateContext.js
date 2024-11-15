import axios from 'axios';

const axiosCreateContext = axios.create({
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000,
  baseURL: 'https://reqres.in/api',
});

export default axiosCreateContext;