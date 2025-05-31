const axios = require('./axiosInstance');

describe('Placeholder API Tests', () => {
  let createdUserId;

  test('POST /users should create a user', async () => {
    const newUser = {
      name: 'Alina Sa',
      username: 'AlinaS',
      email: 'alinas@alinas.com',
      address: {
        street: 'Nabereshna Light',
        suite: 'Apt. 556',
        city: 'Izum',
        zipcode: '64303',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      }
    };

    const response = await axios.post(`/users`, newUser);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toMatchObject(newUser);

    createdUserId = response.data.id;
  });

  test('POST /posts should create a new post', async () => {
    const newPost = {
      title: 'Test Title',
      body: 'Test body content',
      userId: createdUserId,
    };

    const response = await axios.post(`/posts`, newPost);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data.userId).toBe(newPost.userId);
  });

  test('GET /posts/1 should return post with ID 1', async () => {
    const response = await axios.get(`/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty('title');
  });

  test('GET /users/1 should return user with ID 1', async () => {
    const response = await axios.get(`/users/1`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty('email');
  });

  test('POST /comments should create a new comment and return it', async () => {
    const newComment = {
      name: 'Test Name',
      email: 'test@example.com',
      body: 'Test comment body',
      postId: 1,
    };

    const response = await axios.post(`/comments`, newComment);
    expect(response.status).toBe(201);
    expect(response.data.name).toBe(newComment.name);
    expect(response.data.email).toBe(newComment.email);
    expect(response.data.body).toBe(newComment.body);
    expect(response.data.postId).toBe(newComment.postId);
  });
});
