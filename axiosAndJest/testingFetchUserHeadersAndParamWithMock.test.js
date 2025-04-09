import { fetchDataWithHeadersAndParam } from './fetchData';
import axios from 'axios';
import envConfig from '../env.json';

jest.mock('axios');

test('fetchDataWithHeadersAndParam should returns correct values', async () => {
    const mockData = { data: 'response data' };
    const url = `${envConfig.baseUrl}/posts`;
    const headers = { Authorization: 'Bearer token' };
    const params = { userId: 1 };
    axios.get.mockResolvedValueOnce(mockData);

    const result = await fetchDataWithHeadersAndParam(url, headers, params);

    expect(result.data).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledWith(url, {
        headers,
        params,
    });
});

test('fetchDataWithHeadersAndParam should return correct error', async () => {
    const errorResponse = {
        message: 'Network Error',
    };
    const url = 'https://example.com/posts';
    const headers = { Authorization: 'Bearer token' };
    const params = { userId: 1 };
    axios.get.mockRejectedValueOnce(errorResponse);

    expect.assertions(1);
    try {
        await fetchDataWithHeadersAndParam(url, headers, params);
    } catch (e) {
        expect(e.message).toBe('Request failed: Network Error');
    }
});
