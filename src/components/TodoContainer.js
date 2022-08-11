/* eslint-disable no-param-reassign */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  updateEditedTodo = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={todos}
          handleDeleteProps={this.handleDelete}
          handleChangeProps={this.handleChange}
          handleEditing={this.updateEditedTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
