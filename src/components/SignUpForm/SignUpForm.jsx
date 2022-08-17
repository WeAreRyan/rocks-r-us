import "./SignUpForm.css";
import { useNavigate } from "react-router-dom";
import { Component, useState } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
      const navigate = useNavigate();
      navigate("/");
    } catch (err) {
      console.log(err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="d-inline-flex signUpForm">
        <div className="Auth-form-container">
          <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title authFormName">Sign Up</h3>
                <label className="authFormLabel">Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
                <hr />
                <label className="authFormLabel">Email</label>
                <input
                  type="email"
                  className="form-control mt-1 authFormInput"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <hr />
                <label className="authFormLabel">Password</label>
                <input
                  type="password"
                  className="form-control mt-1 authFormInput"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <hr />
                <label className="authFormLabel">Confirm Password</label>
                <input
                  type="password"
                  className="form-control mt-1 authFormInput"
                  name="confirm"
                  value={this.state.confirm}
                  onChange={this.handleChange}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary submitButton"
                  disabled={disable}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      </div>
    );
  }
}