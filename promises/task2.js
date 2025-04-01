function fetchTodo() {
	return new Promise((resolve, reject) => {
		fetch(`https://jsonplaceholder.typicode.com/todos/1`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					reject(`Error: ${response.status}`);
				}
			})
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
}

function fetchUser() {
	return new Promise((resolve, reject) => {
		fetch(`https://jsonplaceholder.typicode.com/users/1`)
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					reject(`Error: ${response.status}`);
				}
			})
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});
}

const promiseAll = Promise.all([fetchUser(), fetchTodo()])
	.then((results) => {
		const [user, todo] = results;
		console.log('Promise.all waits for all promises will be done. Results:', {
			user,
			todo,
		});
	})
	.catch((error) => console.log('Promise.all Error:', error));

const promiseRace = Promise.race([fetchUser(), fetchTodo()])
	.then((result) => {
		console.log('Promise.race waits for 1st completed promis. Result:', result);
	})
	.catch((error) => console.log('Promise.race Error:', error));
