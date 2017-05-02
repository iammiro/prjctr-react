import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components';

const tasksList = ["Task 1", "Task 2"];

ReactDOM.render(
	<Todo tasks={tasksList} />,
	document.getElementById('todo')

);