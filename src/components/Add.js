import React, { useState, useReducer, useContext } from "react";
import { Button, Form, Alert, Nav } from "react-bootstrap";
import firebase from "firebase";
import { UserContext } from "./UserContext";

function Add() {
  let userUID = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [notes, setNotes] = useState("");

  const initMessage = {
    text: "",
    type: null,
  };

  const reducer = (state, action) => {
    switch (action) {
      case "success":
        return { text: "Added Successfully", type: "success" };
      case "null_password":
        return { text: "Password can't be empty", type: "danger" };
      case "null_email":
        return { text: "Email can't be empty", type: "danger" };
      case "null_website":
        return { text: "Website can'T be empty", type: "danger" };
      case "null_notes":
        return { text: "Notes can't be empty", type: "danger" };
    }
  };

  const [message, dispatch] = useReducer(reducer, initMessage);

  function AddData(e) {
    e.preventDefault();

    if (password && email && website) {
      firebase.firestore().collection(userUID).add({
        email: email,
        password: password,
        website: website,
        notes: notes,
      });
      setEmail("");
      setPassword("");
      setWebsite("");
      setNotes("");
      dispatch("success");
    }
    if (password === "" && email) {
      dispatch("null_password");
    }
    if (email === "" && password) {
      dispatch("null_email");
    }
  }

  return (
    <div className="A_Container">
      <div className="left">
        {message.type ? <h4>{message.text}</h4> : null}
        <h1 style={{ top: "197px", fontSize: "72px", marginLeft: "25px" }}>
          {" "}
          Add new or bring me <a style={{color: "#40e0d0"}} href="/karpus">Back</a>
        </h1>

        <div style={{ width: "50%", marginLeft: "25px" }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "500", fontSize: "36px" }}>
                Website
              </Form.Label>
              <Form.Control
                type="website"
                placeholder="Enter Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                style={{
                  borderRadius: "36px",
                  borderColor: "#40e0d0",
                  width: " 531.94px",
                  height: "101.63px",
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "500", fontSize: "36px" }}>
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  borderRadius: "36px",
                  borderColor: "#40e0d0",
                  width: " 531.94px",
                  height: "101.63px",
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label style={{ fontWeight: "500", fontSize: "36px" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
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

            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: "500", fontSize: "36px" }}>
                Notes
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  borderRadius: "36px",
                  borderColor: "#40e0d0",
                  width: " 531.94px",
                  height: "101.63px",
                }}
              />
            </Form.Group>
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
              onClick={(e) => AddData(e)}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Add;
