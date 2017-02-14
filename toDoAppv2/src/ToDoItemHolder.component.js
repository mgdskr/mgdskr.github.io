import React from 'react';
import ToDoItem from './ToDoItem.component';

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
                    onTaskChange={this.handlerTaskChange.bind(this, toDoItem)}
                    onTaskDelete={this.handlerTaskDelete.bind(this, toDoItem)}
                    onTaskDone={this.handlerTaskDone.bind(this, toDoItem)}>
                    {toDoItem.text}
                    </ToDoItem>;

                })
            }
            <form
                className="to-do-app__form"
                ref="formAddToDoItem">
                <input
                    type="text"
                    className="to-do-app__input"
                    placeholder="add new task here"
                    ref="inputField" />
                <button
                    type="submit"
                    className="to-do-app__submit"
                    ref="addItemBtn">
                    <i className="to-do-app__icon to-do-app__icon_add-task fa fa-plus"></i>
                    </button>
            </form>
            </div>
        );
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
        let newTasks = this.state.toDoList.filter((task) => {
            return task.id !== taskId;
        });
        this.setState({toDoList: newTasks});
    }

    handlerTaskDone(task) {
        let taskId = task.id;
        let newTasks = this.state.toDoList.map((task) => {
            if (task.id === taskId) {
                task.done = task.done ? false : true;
            }
            return task;
        });
        this.setState({toDoList: newTasks});
    }

    addItem() {
        this.refs.formAddToDoItem.addEventListener("submit", (event) => {
            if (this.refs.inputField.value === '') {
                event.preventDefault();
                return;
            };
                let newTask = {text: this.refs.inputField.value,
                    done: false,
                    id: this.state.toDoList.length
                };
                this.setState({
                    toDolist: this.state.toDoList.push(newTask)
                });
                this.refs.inputField.value = '';
            event.preventDefault();
        });
    }

    _updateDataWithLocalStorage() {
        let toDoList = JSON.stringify(this.state.toDoList);
        console.log('from _',toDoList);
        localStorage.setItem('toDoList', toDoList);
        console.log('from ls ', localStorage.getItem('toDoList'));
    }

    componentDidUpdate() {
        console.log('update');
        this._updateDataWithLocalStorage();
    }

    componentDidMount() {
        this.addItem();

        let localToDoList = JSON.parse(localStorage.getItem('toDoList'));
        console.log(localToDoList);
        if (localToDoList) {
            this.setState({'toDoList': localToDoList});
        }
    };
}

export default ToDoItemHolder;
