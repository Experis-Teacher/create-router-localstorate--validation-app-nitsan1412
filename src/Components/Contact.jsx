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

  savePhone(e) {
    localStorage["phone"] = e.target.value;
  }

  navigate = () => {
    if (this.isPhoneValid(this.state.phone)) {
      console.log("valid");
      localStorage.setItem("phone", JSON.stringify(this.state.phone));
      this.props.history.push("/finish");
    } else {
      console.log("not valid");
      this.setState({msg: "please enter a vaild phone number"})
    }
  };

 // checks if the phone is valid
isPhoneValid = (phone) => {
  var pattern = /[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}/g;
  // var pattern = /[0-9]{6}/g;

  return pattern.test(phone) || phone == "";
}

  render() {
    return (
      <div>
        <h1> Contact</h1>
        <div>{this.state.msg}</div>
        <input
          type="phone"
          placeholder="Ente phone x-xxx-xxx-xxxx"
          className="phone"
          // onBlur={this.savePhone}
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}