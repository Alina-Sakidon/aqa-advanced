import axios from 'axios';

export async function fetchData() {
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

export async function fetchDataWithHeadersAndParam(url, headers, params) {
    try {
        const response = await axios.get(url, {
            headers: headers,
            params: params,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Request failed: ' + error.message);
    }
}