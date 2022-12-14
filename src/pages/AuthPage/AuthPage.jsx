import { useState } from "react";
import "./AuthPage.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Button from "react-bootstrap/Button";

export default function AuthPage({ setUser }) {
  const [signUp, setSignUp] = useState(null);

  function signUpToggle() {
    if (signUp) {
      setSignUp(null);
    } else {
      setSignUp(true);
    }
  }
  return (
    <main>
      <div className="loginPage">
        {signUp && <SignUpForm setUser={setUser} signUp={signUp} />}
        {!signUp && <LoginForm setUser={setUser} signUp={signUp} />}
        <br />
        <Button className="btn-lg btn-success" onClick={signUpToggle}>
          {!signUp ? "SIGNUP" : "LOGIN"}{" "}
        </Button>
      </div>
    </main>
  );
}
