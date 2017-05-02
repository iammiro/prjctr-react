import React from 'react';
import AddNewTask from './addtask';
import ToDoAppList from './applist';


export class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateList(text) {
        const updatedTasks = this.state.tasks;
        updatedTasks.unshift(text);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    removeTask(text) {
        const updatedTasks = this.state.tasks;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    updateLocalStorage(updatedTasks) {
        console.log('saved');
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    }

    render() {
        return (
            <div className="wrapper">
                <header className="header">Todo App</header>
                <AddNewTask updateList={this.updateList}/>
                <ToDoAppList tasks={this.state.tasks} remove={this.removeTask}/>
            </div>
        );
    }
}


export default Todo;