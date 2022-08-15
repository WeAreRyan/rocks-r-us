import "./SignUpForm.css";
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
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch (err) {
      // An error occurred
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
                <button type="submit" className="btn btn-primary submitButton" disabled={disable}>
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

// export default function SignUpForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirm: '',
//     error: ''
//   })
//   const disable = formData.password !== formData.confirm;

//   function handleChange(evt) {
//     setFormData({
//       ...formData,
//       [evt.target.name]: evt.target.value,
//       error: ''
//     })
//   }

//   function handleSubmit(evt) {
//     evt.preventDefault();
//     alert(JSON.stringify(formData));
//   }

//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//           <label>Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//           <label>Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//           <label>Confirm</label>
//           <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
//           <button type="submit" disabled={disable}>SIGN UP</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{formData.error}</p>
//     </div>
//   );
// }
