import axios from "axios";

const apiInstance = axios.create({
	baseURL: "https://reqres.in/api/users",
});

export default apiInstance;
