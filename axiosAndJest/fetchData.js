import axios from 'axios';

async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/wrongUrl');
        console.log(response.data);
        return response.data;
    }

    catch (error) {
        console.error('Error fetching data:', error.message);
        throw new Error('Request failed with status: ' + (error.response?.status || 'Unknown error'));
    }
}

async function fetchDataWithHeadersAndParam(url, headers, params) {
    try {
        const response = await axios.get(url, {
            headers: headers,
            params: params,
        });
        return response.data;
    } catch (error) {
        throw new Error('Request failed: ' + error.message);
    }
}

export { fetchDataWithHeadersAndParam, fetchData };