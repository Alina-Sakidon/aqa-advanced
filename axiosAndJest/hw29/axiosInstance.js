const axios = require('axios');
const chalk = require('chalk');

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const dim = chalk.dim;
const cyan = chalk.cyan;
const green = chalk.green;
const yellow = chalk.yellow;
const red = chalk.red;

instance.interceptors.request.use((config) => {
  config.metadata = { startTime: new Date() };

  console.log(cyan(`[REQUEST] ${config.method.toUpperCase()} ${config.url}`));

  if (config.data) {
    console.log(dim('Request Body:'));
    console.log(yellow(JSON.stringify(config.data, null, 2)));
  }

  return config;
}, (error) => {
  console.error(red('Request error:'), error);
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  const duration = new Date() - response.config.metadata.startTime;

  console.log(green(`[RESPONSE] ${response.status} from ${response.config.url} (${duration}ms)`));

  if (response.data) {
    console.log(dim('Response Body:'));
    console.log(yellow(JSON.stringify(response.data, null, 2)));
  }

  return response;
}, (error) => {
  console.error(red('Response error:'), error.response?.status || error.message);

  if (error.response?.data) {
    console.log(dim('Error Response Body:'));
    console.log(yellow(JSON.stringify(error.response.data, null, 2)));
  }

  return Promise.reject(error);
});

module.exports = instance;
