import React, { Component } from 'react';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      password: ''
    };
  }
  validate = () => {
    let isValid = true;
    const firstName = document.getElementById("firstName").value;
    if (!/^[A-Za-z]+$/.test(firstName)) {
      document.getElementById("firstNameError").innerText = "Only characters allowed";
      isValid = false;
    } else {
      document.getElementById("firstNameError").innerText = "";
    }
    const lastName = document.getElementById("lastName").value;
    if (!/^[A-Za-z]+$/.test(lastName)) {
      document.getElementById("lastNameError").innerText = "Only characters allowed";
      isValid = false;
    } else {
      document.getElementById("lastNameError").innerText = "";
    }
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,12}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById("passwordError").innerText =
        "Password must be 8-12 characters long, contain one uppercase, and one special character.";
      isValid = false;
    } else {
      document.getElementById("passwordError").innerText = "";
    }
    if (isValid) {
      window.location.href = "/welcome_page.html";
    }
    return false;
  };
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Sign Up Page</h2>
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName"required />
            <div className="text-danger" id="firstNameError"></div>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName"/>
            <div className="text-danger" id="lastNameError"></div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
            <div className="text-danger" id="passwordError"></div>
          </div>
          <div style={{ marginTop: "15px" }}>
            <button type="button" onClick={this.validate}>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
export default Signup;
