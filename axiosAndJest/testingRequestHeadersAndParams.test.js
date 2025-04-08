import { faker } from '@faker-js/faker';
import { fetchDataWithHeadersAndParam } from './fetchData';
import axios from 'axios';
jest.mock('axios');

test('fetch users with params and headers should have correct values', async () => {
    expect.assertions(3);

    const url = 'https://jsonplaceholder.typicode.com/posts';
    const customHeaders = { 'Content-Type': 'application/json' };
    const customParams = { id: 1 };
    const mockResponse = { data: [{ userId: 1, id: 1, title: faker.lorem.sentence()}] };
    axios.get.mockResolvedValue(mockResponse);
    const params = new URLSearchParams(customParams);

    const result = await fetchDataWithHeadersAndParam(url, customHeaders, customParams);

    expect(axios.get).toHaveBeenCalledWith(url, expect.objectContaining({
        headers: expect.objectContaining(customHeaders),
        params: expect.objectContaining(customParams),
    }));
    expect(result).toEqual(mockResponse.data);
    expect(params.toString()).toBe('id=1');
});
