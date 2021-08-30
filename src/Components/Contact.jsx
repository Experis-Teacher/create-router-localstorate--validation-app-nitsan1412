import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      msg: ""
    };
  }

  handleChange = (e) => {
    this.setState({ phone: e.target.value });
    this.setState({msg: ""})
  };

  savePhoneNumber(e) {
    localStorage["phone"] = e.target.value;
  }

  navigate = () =>  { 
        if (this.phoneValidation (this.state.phone)) {
      this.setState({msg: (this.phoneValidation (this.state.phone))})
    } else {
      localStorage.setItem("phone", JSON.stringify(this.state.phone));
      this.props.history.push("/finish");
    }
  };

 phoneValidation = (phone) => {
  if (phone.trim() === '') {
    return `phone is required`;
  }
  if (/[0-9]{2,4}-[0-9]{3}-[0-9]{3}/g.test(phone)) {
    return 'Invalid characters';
  }
  return null;
};

  render() {
    return (
      <div>
        <h1> Contact</h1>
        <div>{this.state.msg}</div>
        <input
          type="phone"
          placeholder="Ente phone xxxxxxxxxx"
          className="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}