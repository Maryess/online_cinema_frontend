import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:4200/api",
	headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
	function (config) {
		const token = localStorage.getItem("authToken");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default axiosInstance;
