async function fetchTodo() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
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

async function fetchUser() {
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

async function fetchDataAll() {
	try {
		const [user, todo] = await Promise.all([fetchUser(), fetchTodo()]);
		console.log('Promise.all waits for all promises will be done. Results:', {
			user,
			todo,
		});
	} catch (error) {
		console.log('Promise.all Error:', error);
	}
}

async function fetchDataRace() {
	try {
		const result = await Promise.race([fetchUser(), fetchTodo()]);
		console.log('Promise.race waits for 1st completed promise. Result:', result);
	} catch (error) {
		console.log('Promise.race Error:', error);
	}
}

fetchDataAll();
fetchDataRace();
