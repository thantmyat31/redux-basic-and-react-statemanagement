import axios from 'axios';

export const fetchImage = async () => {
	const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);

	if (response.status >= 400) {
		throw new Error(response.error);
	}
	return response;
};
