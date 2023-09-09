import axios from "axios";

const url: string = "https://jsonplaceholder.typicode.com/todos/1";
interface Todo {
	id: number;
	title: string;
	completed: boolean;
}
axios.get(url).then((res) => {
	const { id, title, completed } = res.data as Todo;
	logConsole(id, title, completed);
});

const logConsole = (id: number, title: string, completed: boolean) => {
	console.log(`${id} ${title} ${completed}`);
};
