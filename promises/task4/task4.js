import User from './User.js';
import Todo from './Todo.js';

const user = new User();
const todo = new Todo();

user.fetchDataAll(todo);
user.fetchDataRace(todo);
