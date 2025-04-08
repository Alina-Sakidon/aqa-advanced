import { fetchData } from './fetchData'; 
import axios from 'axios';
import { faker } from '@faker-js/faker';

jest.mock('axios');

test('fetchData should return 404 for wrong url', async () => {
    const errorResponse = {
        response: {
            status: 404,
        },
    };
    
    axios.get.mockRejectedValueOnce(errorResponse);


    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        const statusCode = e.message.split(': ')[1];
        expect(Number(statusCode)).toBe(404);
    }
});

test('fetchData should return correct data for correct url', async () => {
    const dataResponse = {
        data: [
            { id: 1, title: faker.lorem.sentence() },
        ],
    };
    axios.get.mockResolvedValueOnce(dataResponse);

    const result = await fetchData();

    expect(result).toEqual(dataResponse.data);
});
