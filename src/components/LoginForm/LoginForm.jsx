import "./LoginForm.css";
import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div className="d-inline-flex loginForm">
      <div className="Auth-form-container">
        <form
          className="Auth-form mb-3"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title authFormName">Login</h3>
            <div className="form-group mt-3">
              <label className="authFormLabel">Email</label>
              <input
                type="text"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={credentials.email}
                onChange={handleChange}
                required
              />
              <hr />
            </div>
            <div className="form-group mt-3">
              <label className="authFormLabel">Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary submitButton">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
