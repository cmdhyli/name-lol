import React, { Component } from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', placeholder: 'Enter a name'};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:

  <input type="text" value={this.state.value} onChange={this.handleChange}  placeholder={this.state.placeholder}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
