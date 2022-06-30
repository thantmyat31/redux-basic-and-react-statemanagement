export const fetchImage = async () => {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
		const result = response.json();
		return result;
	} catch (error) {
		throw new Error(error);
	}
};
