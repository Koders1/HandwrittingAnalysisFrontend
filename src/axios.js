import axios from "axios";

const axiosInstance = axios.create({
  //baseURL: "http://127.0.0.1:8000/",
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default axiosInstance;
