import axios from "axios";

export const fetchMovies = () => {
	return async () => {
		try {
			const response = await axios.get("http://localhost:4200/api/movie");
		} catch (error) {
			return error;
		}
	};
};
