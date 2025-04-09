import { fetchDataWithHeadersAndParam } from './fetchData';
import axios from 'axios';

test('fetch users with params and headers should have correct values', async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const headers = {
        'Authorization': 'Bearer token123',
        'Custom-Header': 'TestHeaderValue',
    };
    const params = {
        id: 1,
    };

    const response = await fetchDataWithHeadersAndParam(url, headers, params);

    expect(response.status).toBe(200);
    expect(response.config.params).toEqual({ id: 1 });
    expect(response.config.headers['Authorization']).toBe('Bearer token123');
    expect(response.config.headers['Custom-Header']).toBe('TestHeaderValue');
    expect(response.data[0].id).toBe(1);
});
