import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  auth,
  createUserProfileDocumentation,
} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value }); //dynamically key value, the name could be email/password
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // check passowrd and confirm password is match
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    try {
      // create new user with email and password by using Firebase auth method
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // check user exist in db
      await createUserProfileDocumentation(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("error sign up new user", error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <FormInput
          type="text"
          name="displayName"
          required
          value={displayName}
          label="Display Name"
          onChange={this.handleChange}
        />
        <FormInput
          type="email"
          name="email"
          required
          value={email}
          label="Email"
          onChange={this.handleChange}
        />
        <FormInput
          type="password"
          name="password"
          required
          value={password}
          label="Password"
          onChange={this.handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          label="Confirm Password"
          onChange={this.handleChange}
        />
        <div className="button">
          <CustomButton type="submit" onClick={this.handleSubmit}>
            Sign Up
          </CustomButton>
        </div>
      </div>
    );
  }
}

export default SignUp;
