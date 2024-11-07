import { useEffect, useState } from "react";
import axiosInstance from "../lib/axiosInstance";
import { useGetValueFiled } from "./useGetValueField";

interface Axios {
	path: string;
	request: string;
}

export const useAxiosRequest = ({ path, request }: Axios) => {
	const { name, password, email } = useGetValueFiled();

	const [data, setData] = useState(null);

	useEffect(() => {
		const requests = ({ path, request }: Axios) => {
			if (request === "get") {
				axiosInstance
					.get(path)
					.then((response) => {
						setData(response.data);
					})
					.catch((error) => {
						console.log(`Error: ${error}`);
					});
			} else if (request === "post") {
				axiosInstance
					.post(path, {
						email: email,
						password: password,
						name: name,
					})
					.then((response) => {
						console.log(response);
					})
					.catch((error) => {
						console.log(error);
					});
			} else if (request === "patch") {
				axiosInstance
					.patch(path, {})
					.then((response) => {
						console.log(response);
					})
					.catch((error) => {
						console.log(error);
					});
			}
			return { requests };
		};
	}, [email, password, name]);

	return { useEffect };
};
