export default class Todo {
  async fetchTodo() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  }
}
