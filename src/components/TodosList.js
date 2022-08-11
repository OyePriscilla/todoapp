import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <div>
        <ul style={{ paddingLeft: "0"}}>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              handleDeleteProps={this.props.handleDeleteProps}
              handleEditing={this.props.handleEditing}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodosList;
