/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          border: '3px solid black', borderRadius: '20px', width: '90%', margin: '0 auto', textAlign: 'center',
        }}
      >
        <input
          style={{
            width: '80%',
            height: '45px',
            border: 'none',
            fontSize: '30px',
            fontWeight: '300',

          }}
          className="inputTodo"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          type="text"
          placeholder="Add new Todo "
        />
        <button
          type="button"
          style={{
            backgroundColor: 'inherit', border: 'none', fontSize: '20px', cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default InputTodo;
