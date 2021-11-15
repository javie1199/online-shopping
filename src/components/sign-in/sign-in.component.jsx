import React from "react";

import "./sign-in.styles.scss";
import "../form-input/form-input.component";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value }); //dynamically key value, the name could be email/password
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <FormInput
          type="email"
          name="email"
          required
          value={this.state.email}
          label="email"
          onChange={this.handleChange}
        />
        <FormInput
          type="password"
          name="password"
          required
          value={this.state.password}
          label="password"
          onChange={this.handleChange}
        />
        <CustomButton>Sign In</CustomButton>
      </div>
    );
  }
}

export default SignIn;
