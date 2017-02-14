import React from 'react';

class ToDoItem extends React.Component {
    render() {

        return (
            <div className="to-do-app__item to-do-item">
                <i className={this.props.done ? "fa fa-check-square-o to-do-item__icon to-do-item__icon_is-done" : "fa fa-square-o to-do-item__icon to-do-item__icon_is-done"} ref="checkStatus"
                onClick={this.props.onTaskDone}></i>
            {this.renderItem(this.props.children, this.props.done, this.props.onTaskChange)}
                <span><i className="fa fa-trash-o to-do-item__icon to-do-item__icon_to-trash" ref="toTrash" onClick={this.props.onTaskDelete}></i></span>
            </div>
        );
    }
    renderItem(task, isDone, onChange) {
        // console.log(this.props);
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
            <input
                type="text"
                className="to-do-item__text"
                style={isDone
                ? listStyles.done
                : listStyles.inProgress}
                defaultValue={task}
                onChange={onChange}
                />
        );
    }
}


export default ToDoItem;
