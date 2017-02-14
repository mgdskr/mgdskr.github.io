import React from 'react';

class ToDoItem extends React.Component {
    render() {

        return (
            <div className="to-do-app__item to-do-item">
                <i className={this.props.done ? "fa fa-check-square-o to-do-item__icon to-do-item__icon_is-done" : "fa fa-square-o to-do-item__icon to-do-item__icon_is-done"} ref="checkStatus"
                onClick={this.props.onTaskDone}></i>
                {this.renderItem(this.props.children, this.props.done)}
                <i className="fa fa-trash-o to-do-item__icon to-do-item__icon_to-trash" ref="toTrash" onClick={this.props.onTaskDelete}></i>
            </div>
        );
    }
    renderItem(task, isDone) {
        const listStyles = {
            done: {
                color: 'lightgray',
                textDecoration: 'line-through'
            },
            inProgress: {
                color: 'black',
                textDecoration: 'none'
            }
        };
        return (
            <span className="to-do-item__text" style={isDone
                ? listStyles.done
                : listStyles.inProgress}>{task}</span>
        );
    }
}


export default ToDoItem;
