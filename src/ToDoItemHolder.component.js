import React from 'react';
import ToDoItem from './ToDoItem.component';
import ItemAdd from './ItemAdd.component';

class ToDoItemHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: []
        };
    }

    render() {
        return (
            <div className="to-do-app">
                <h1 className="to-do-app__title">TODO list</h1>
                {
                    this.state.toDoList.map((toDoItem, itemId) => {
                        return <ToDoItem
                        key={itemId}
                        id={toDoItem.id}
                        done={toDoItem.done}
                        text={toDoItem.text}
                        onTaskChange={this.handlerTaskChange.bind(this, toDoItem)}
                        onTaskDelete={this.handlerTaskDelete.bind(this, toDoItem)}
                        onTaskDone={this.handlerTaskDone.bind(this, toDoItem)}
                        value="">
                        </ToDoItem>;

                    })
                }
                <ItemAdd
                    onTaskAdd={this.handlerTaskAdd.bind(this)}
                    />
            </div>
        );
    }

    handlerTaskAdd(event, value) {
        event.preventDefault();
        if (value === '') {
            return;
        };
        let newTask = {text: value,
            done: false,
            id: this.state.toDoList.length
        };
        this.setState({
            toDolist: this.state.toDoList.push(newTask)
        });
        value = '';
    }

    handlerTaskChange(task, event) {
        let taskId = task.id;
        let updatedTask  = event.target.value;
        let newTasks = this.state.toDoList.map((task) => {
            if (task.id === taskId) {
                task.text = updatedTask;
            }
            return task;
        });
        this.setState({toDoList: newTasks});
    }

    handlerTaskDelete(task) {
        let taskId = task.id;
        let newTasks = this.state.toDoList.filter((task) => task.id !== taskId);
        this.setState({toDoList: newTasks});
    }

    handlerTaskDone(task) {
        let taskId = task.id;
        let newTasks = this.state.toDoList.map((task) => {
            if (task.id === taskId) {
                task.done = !task.done;
            }
            return task;
        });
        this.setState({toDoList: newTasks});
    }


    _updateDataWithLocalStorage() {
        let toDoList = JSON.stringify(this.state.toDoList);
        localStorage.setItem('toDoList', toDoList);
    }

    componentDidUpdate() {
        this._updateDataWithLocalStorage();
    }

    componentDidMount() {
        let localToDoList = JSON.parse(localStorage.getItem('toDoList'));
        console.log(localToDoList);
        if (localToDoList) {
            this.setState({'toDoList': localToDoList});
        }
    };
}

export default ToDoItemHolder;
