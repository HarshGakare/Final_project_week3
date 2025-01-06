import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:5015/',  
});

export default axiosInstance;
