import axios from '../axios';

export const analyseImage = async (file) => {
	const formData = new FormData();
	formData.append('file', file);
	const uploadResponse = await axios.post('/analyse', formData);
	const actualData = uploadResponse.data;
	return actualData;
};
