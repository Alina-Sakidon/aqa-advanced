import {fetchData} from "./fetchData";

test('fetchData should throw an error for a wrong URL', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        const statusCode = e.message.split(': ')[1];
        expect(Number(statusCode)).toBe(404);
    }
});