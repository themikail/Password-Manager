import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import fire from "./Fire";
import { Button, Form } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import Karpus from "../img/karpus.png";
import Rights from "../img/rights.png";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const history = useHistory();
  function userLogin(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("USER CREDENTIAL CORRECT");
        history.push("/karpus");
      })
      .catch((err) => {
        setMessage(err.message);
      });
  }

  return (
    <div className="L_container">
      <div className="left">
        <img src={Karpus} alt="Karpus_logo" />

        <h1>Login</h1>
        <h2>Willkommen zurück</h2>
        <Form className="Form">
          {message ? <h4>{message}</h4> : null}

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="FormLabel">Email*</Form.Label>
            <Form.Control
              className="FormControl"
              type="email"
              placeholder="mail@website.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="FormLabel">
              Password*
            </Form.Label>
            <Form.Control
              className="FormControl"
              type="password"
              placeholder="Min. 8 character"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </Form.Group>
          {/* <Button variant="primary" type="submit" onClick={(e) => userLogin(e)}>
          {" "}
          Login
        </Button>
 */}
          <Button className="btns" type="submit" onClick={(e) => userLogin(e)}>
            Login
          </Button>

          <div className="signUpBtn">
            <p>
              Du hast noch keinen Account?{" "}
              <a style={{ color: "#40e0d0", backgroundColor: "#FFFFFF" }} href="/signup">
                Sign up
              </a>
            </p>
          </div>
        </Form>
      </div>

      <div className="right">
       
      </div>
    </div>
  );
}

export default Login;
