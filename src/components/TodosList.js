/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    const {
      todos, handleChangeProps, handleDeleteProps, handleEditing,
    } = this.props;
    return (
      <div>
        <ul style={{ paddingLeft: '0' }}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={handleChangeProps}
              handleDeleteProps={handleDeleteProps}
              handleEditing={handleEditing}
            />
          ))}
        </ul>
      </div>
    );
  }
}

TodosList.propType = {
  todos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  handleDeleteProps: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
};

export default TodosList;
