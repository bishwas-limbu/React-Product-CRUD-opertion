import axios from "axios";

const BACKEND_URL = 'https://dummyjson.com/';

const fetchData = async(url) => {
    const response = await axios.get(BACKEND_URL + url);
    return response;
};
export default fetchData;