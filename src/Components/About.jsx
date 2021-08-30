import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      msg: ""
    };
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
    this.setState({msg: ""})
  }

  loadToMemoryName(e) {
    if (e.target.value) {
      localStorage["name"] = e.target.value;
    }
  }

  navigate = () => {
    
    if (this.nameValidation (this.state.name)) {
      this.setState({msg: (this.nameValidation (this.state.name))})
    } else {
      localStorage.setItem("name", JSON.stringify(this.state.name));
      this.props.history.push("/contact");
    }
  };

// checks if the full name is valid
nameValidation  = (name) => {
  if (name.trim() === '') {
    return `name is required`;
  }
  if (/[^a-zA-Z -]/.test(name)) {
    return 'Invalid characters';
  }
  if (name.trim().length < 3) {
    return `name needs to be at least three characters`;
  }
  return null;
};

  render() {
    return (
      <div>
        <h1> About</h1>
        <div>{this.state.msg}</div>
        <input
          type="text"
          placeholder="Enter your name"
          className="name"
          onChange={this.handleChange}
          // onChange={this.saveName}
          value={this.state.name}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}