import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://dataservice.accuweather.com'
})

export default axiosInstance;