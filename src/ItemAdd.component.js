import React from 'react';

class ItemAdd extends React.Component {
    render() {
        return (
            <form
                className="to-do-app__form"
                ref="formAddToDoItem"
                onSubmit={this.handleInput.bind(this)}>
            <input
                type="text"
                className="to-do-app__input"
                placeholder="add new task here"
                ref="inputField"
                />
            <button
                type="submit"
                className="to-do-app__submit"
                ref="addItemBtn">
                    <i className="to-do-app__icon to-do-app__icon_add-task fa fa-plus"></i>
            </button>
        </form>
    );}

    handleInput(event) {
        let value = this.refs.inputField.value;
        this.refs.inputField.value = "";
        this.props.onTaskAdd(event, value);
    }
}

export default ItemAdd;
