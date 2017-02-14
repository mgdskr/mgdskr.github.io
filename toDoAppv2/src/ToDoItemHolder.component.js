import React from 'react';
import ToDoItem from './ToDoItem.component';

class ToDoItemHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [{
                text: "learn JS",
                done: true,
                id: 0
            },{
                text: "learn ES6",
                done: false,
                id: 1
            },{
                text: "learn React",
                done: false,
                id: 2
            },{
                text: "workout",
                done: false,
                id: 3}]
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


    componentDidMount() {
        this.addItem();
    };
}

export default ToDoItemHolder;
