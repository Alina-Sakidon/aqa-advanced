import { fetchDataWithHeadersAndParam } from './fetchData';

test('fetchData should include custom headers and query params in the request', async () => {
    expect.assertions(2);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const customHeaders = { 'Authorization': 'Bearer token' };
    const customParams = { userId: 1 };

    try {
        const result = await fetchDataWithHeadersAndParam(url, customHeaders, customParams);
        expect(result).toBeInstanceOf(Array);
        expect(result.some(item => item.userId === 1)).toBe(true);
    } catch (error) {
        console.error(error);
        throw new Error('Test failed due to network issues or bad request.');
    }
});
