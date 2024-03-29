import React from "react";

import FormInput from "../form-input/form-input";
import CustomButton from '../custom-button/custom-button'
import "./sign-in.scss";
import { SignInWithGoogle,auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit =  async event => {
    event.preventDefault();

    const {email,password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error.message)
    } 
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already Have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
              <CustomButton type="submit" >Sign In</CustomButton>
              <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
