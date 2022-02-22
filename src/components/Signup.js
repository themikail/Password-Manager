import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import fire from "./Fire";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import Karpus from "../img/karpus.png";
import Rights from "../img/rights.png";

function Signup() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function UserSignUp(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("User CEATED SUCCESSFULLY");
        history.push("/karpus");
      })
      .catch((err) => {
        setMessage(err.message);
      });
  }

  return (
    <div className="R_container">
      <div className="left">
        <img
          style={{ width: "123px", marginTop: "22px" }}
          src={Karpus}
          alt="Karpus_logo"
        />

        <h1 style={{ top: "197px", fontSize: "72px" }}>Sign Up</h1>
        <h2 style={{ fontSize: "36px", marginTop: "25px" }}>START FOR FREE</h2>

        <Form style={{ margin: "25px", width: "50%" }}>
          {message ? <h4>{message}</h4> : null}

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "500", fontSize: "36px" }}>
              Email*
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="mail@website.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                borderRadius: "36px",
                borderColor: "#40e0d0",
                width: " 531.94px",
                height: "101.63px",
              }}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: "500", fontSize: "36px" }}>
              Password*
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Min. 8 character"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                borderRadius: "36px",
                borderColor: "#40e0d0",
                width: " 531.94px",
                height: "101.63px",
              }}
            />
          </Form.Group>
          {/* <Button variant="primary" type="submit" onClick={(e) => UserSignUp(e)}>
          Kayıt ol
        </Button> */}

          <Button
            style={{
              backgroundColor: "#40e0d0",
              borderColor: "#40e0d0",
              color: "#ffffff",
              fontWeight: "500",
              fontSize: "25px",
              marginTop: "20px",
              borderRadius: "36px",
              width: "531px",
            }}
            type="submit"
            onClick={(e) => UserSignUp(e)}
          >
            Login
          </Button>

          <div className="signUpBtn">
            <p>
              Du hast schon keinen Account? <a href="/login">Login</a>
            </p>
          </div>
        </Form>
      </div>
      <div className="right">
        {/* <img
          src={Rights}
          alt="Karpus_logo"
          style={{
            maxHeight: "100%",
            maxwidth: "100%",
          }}
        /> */}
      </div>
    </div>
  );
}

export default Signup;
