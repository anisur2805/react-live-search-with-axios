import axios from "axios";

const resources = {};

const makeRequestCreator = () => {
	let cancel;

	return async (query) => {
		if (cancel) {
			cancel.cancel();
		}
        
		cancel = axios.CancelToken.source();

		try {
			if (resources[query]) {
				return resources[query];
			}
			const res = await axios(query, { cancelToken: cancel.token });
			const result = res.data.results;
			resources[query] = result;
			// return result;
			return resources;
		} catch (error) {
			if (axios.isCancel(error)) {
				console.log("Request canceled", error.message);
			} else {
				console.log("Something went wrong: ", error.message);
			}
		}

	};
};

export const search = makeRequestCreator();

export const  getRequest = async (query) => {
    return await axios(query, { });
}