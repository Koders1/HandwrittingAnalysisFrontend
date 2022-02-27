import axios from "axios";

const axiosInstance = axios.create({
   baseURL: process.env.BAASE_URL,
});

export default axiosInstance;