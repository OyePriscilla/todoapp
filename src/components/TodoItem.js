import React from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  editTodo = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    const { todo, handleChangeProps, handleDeleteProps } = this.props;
    return (
      <li style={liItem}>
        <div onDoubleClick={this.editTodo} style={viewMode}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleChangeProps(todo.id)}
          />{" "}
          <span
            className="todoTitle"
            style={todo.completed ? completedStyle : null}
          >
            {todo.title}
          </span>{" "}
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={todo.title}
          onChange={(e) => this.props.handleEditing(e.target.value, todo.id)}
          onKeyDown={this.handleUpdatedDone}
        />
        <button
          style={{
            border: "none",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
          }}
          onClick={() => handleDeleteProps(todo.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

const liItem = {
  listStyleType: "none",
  width: "90%",
  margin: "0 auto",
  borderBottom: "1px solid rgb(81, 95, 80)",
  padding: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: "30px",
};

const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
};

export default TodoItem;
