import axios from "axios";
//baseUrl
export const baseURL = "https://sephora.p.rapidapi.com";
// fetching data func
export const fetchApi = async (url) => {
	const { data } = await axios
		.get(url, {
			headers: {
				"X-RapidAPI-Host": "sephora.p.rapidapi.com",
				"X-RapidAPI-Key":
					"d5c75b0f1dmsh0a443d631462b9ap1031bdjsn8f9a2123284b",
			},
		})
		.catch((err) => {
			console.error(err);
		});

	return data;
};
// export const fetchMackup = async (url) => {
// 	const { data } = await axios
// 		.get(url, {
// 			headers: {
// 				"X-RapidAPI-Host": "sephora.p.rapidapi.com",
// 				"X-RapidAPI-Key":
// 					"d5c75b0f1dmsh0a443d631462b9ap1031bdjsn8f9a2123284b",
// 			},
// 		})
// 		.catch((err) => {
// 			console.error(err);
// 		});

// 	return data;
// };
