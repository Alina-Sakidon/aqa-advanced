export default class User {
    async fetchUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
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

    async fetchDataAll(todo) {
        try {
            const [userData, todoData] = await Promise.all([this.fetchUser(), todo.fetchTodo()]);
            console.log('Promise.all waits for all promises to be done. Results:', { user: userData, todo: todoData });
        } catch (error) {
            console.log('Promise.all Error:', error);
        }
    }

    async fetchDataRace(todo) {
        try {
            const result = await Promise.race([this.fetchUser(), todo.fetchTodo()]);
            console.log('Promise.race waits for the 1st completed promise. Result:', result);
        } catch (error) {
            console.log('Promise.race Error:', error);
        }
    }
}
