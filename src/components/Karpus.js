import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Nav, Table } from "react-bootstrap";
import firebase from "firebase";
import { UserContext } from "./UserContext";
import { AiFillPlusCircle } from "react-icons/ai";
import "./Karpus.css";
import Karpuss from "../img/karpus.png";

function Karpus({ searchQuery, setSearchQuery }) {
  // ! editData
  const [newData, setnewData] = useState("");
  const [data, setData] = useState([]);
  const [select, setSelect] = useState("");
  const [isEdit, setisEdit] = useState({
    id: null,
    isEdit: false,
    type: null,
  });
  let userUID = useContext(UserContext);
  const [counter, setCounter] = useState(1);

  /*   // ? viewData
  const userUIDv = useContext(UserContext);
    const [data, setData] = useState([]);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    if (userUIDv) {
      const unsuscribe = firebase
        .firestore()
        .collection(userUID)
        .onSnapshot((snap) => {
          const prime = snap.docs.map((item) => ({
            id: item.id,
            email: item.data().email,
            password: item.data().password,
            website: item.data().website,
            notes: item.data().notes,
          }));
          setData(prime);
        });
    } else {
      setCounter(counter + 0);
    }
  }, [counter]); */

  // ! editData
  function editWebsite() {
    setisEdit({
      id: select,
      edit: true,
      type: "website",
    });
  }

  function editEmail() {
    setisEdit({
      id: select,
      edit: true,
      type: "email",
    });
  }

  function editPassword() {
    setisEdit({
      id: select,
      edit: true,
      type: "password",
    });
  }

  function editNotes() {
    setisEdit({
      id: select,
      edit: true,
      type: "notes",
    });
  }
  function deleteData(e) {
    e.preventDefault();

    firebase.firestore().collection(userUID).doc(select).delete();
    setSelect("");
  }

  function updateData(e) {
    e.preventDefault();

    if (isEdit.type === "email") {
      firebase.firestore().collection(userUID).doc(isEdit.id).update({
        email: newData,
      });
    } else if (isEdit.type === "password") {
      firebase.firestore().collection(userUID).doc(isEdit.id).update({
        password: newData,
      });
    } else if (isEdit.type === "website") {
      firebase.firestore().collection(userUID).doc(isEdit.id).update({
        website: newData,
      });
    } else {
      firebase.firestore().collection(userUID).doc(isEdit.id).update({
        notes: newData,
      });
    }

    setisEdit({
      id: null,
      edit: false,
      type: null,
    });
  }
  function cancelChange(e) {
    e.preventDefault();
    setisEdit({
      id: null,
      edit: false,
      type: null,
    });
  }

  useEffect(() => {
    if (userUID) {
      firebase
        .firestore()
        .collection(userUID)
        .onSnapshot((snap) => {
          const prime = snap.docs.map((item) => ({
            id: item.id,
            email: item.data().email,
            password: item.data().password,
            website: item.data().website,
            notes: item.data().notes,
          }));

          setData(prime);
        });
    } else {
      setCounter(counter + 1);
    }
  }, [counter]);

  return (
    <div className="K_container">
      <div className="edit">
        <h3>Search for your website and change anything :)</h3>
        <div>
          {/* <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect01">
              Options
            </label>
          </div> */}
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(e) => setSelect(e.target.value)}
            style={{
              backgroundColor: "#40e0d0",
              borderColor: "#40e0d0",
              borderRadius: "16px",
              color: "#ffffff",
              maxWidth: "600px",
            }}
          >
            <option selected>Search here ..</option>
            {data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.website}
              </option>
            ))}
          </select>
        </div>

        {isEdit.edit ? (
          <>
            <Form>
              <Form.Label>Enter New {isEdit.type}</Form.Label>
              <Form.Control
                type={isEdit.type}
                placeholder="Enter"
                value={newData}
                style={{ width: "50%" }}
                onChange={(e) => setnewData(e.target.value)}
              />
              <Button
                style={{ margin: "25px" }}
                variant="success"
                type="submit"
                onClick={(e) => updateData(e)}
              >
                {" "}
                Save
              </Button>
              <Button
                style={{ margin: "25px" }}
                variant="dark"
                type="submit"
                onClick={(e) => cancelChange(e)}
              >
                {" "}
                Cancel
              </Button>
            </Form>
          </>
        ) : (
          <>
            <Button
              style={{
                backgroundColor: "#FF8282",
                borderColor: "#FF8282",
                color: "#ffffff",
                fontWeight: "normal",
                fontSize: "24px",
                marginTop: "20px",
                borderRadius: "12px",
                textAlign: "center",
              }}
              type="submit"
              onClick={(e) => editWebsite(e)}
            >
              Change Website
            </Button>

            <Button
              style={{
                backgroundColor: "#FF8282",
                borderColor: "#FF8282",
                color: "#ffffff",
                fontWeight: "normal",
                fontSize: "24px",
                marginTop: "20px",
                borderRadius: "12px",
                textAlign: "center",
              }}
              type="submit"
              onClick={(e) => editEmail(e)}
            >
              Change Email
            </Button>

            <Button
              style={{
                backgroundColor: "#FF8282",
                borderColor: "#FF8282",
                color: "#ffffff",
                fontWeight: "normal",
                fontSize: "24px",
                marginTop: "20px",
                borderRadius: "12px",
                textAlign: "center",
              }}
              type="submit"
              onClick={(e) => editPassword(e)}
            >
              Change Password
            </Button>

            <Button
              style={{
                backgroundColor: "#FF8282",
                borderColor: "#FF8282",
                color: "#ffffff",
                fontWeight: "normal",
                fontSize: "24px",
                marginTop: "20px",
                borderRadius: "12px",
                textAlign: "center",
              }}
              type="submit"
              onClick={(e) => editNotes(e)}
            >
              Change Notes
            </Button>

            <Button
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#FF8282",
                color: "#FF8282",
                fontWeight: "normal",
                fontSize: "24px",
                marginTop: "20px",
                borderRadius: "12px",
                textAlign: "center",
              }}
              type="submit"
              onClick={(e) => deleteData(e)}
            >
              Delete
            </Button>
          </>
        )}
      </div>

      <div className="add">
        <Nav.Link href="/add">
          <AiFillPlusCircle />
        </Nav.Link>
      </div>

      <div className="view">
        {console.log(userUID)}

        <div
          style={{
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Table
            style={{
              boxShadow: "0px 4px 4px rgba(0,0,0,0.25",
              borderRadius: "32px",
            }}
            hover
          >
            <thead>
              {data.map((item) => (
                <tr>
                  <th style={{ width: "5%" }}>
                    <h2>{item.website}</h2>
                    <td>
                      <h5>Username:</h5> <p>{item.email}</p>
                      <h5>Password:</h5> <p>{item.password}</p>
                      <h5>Notes:</h5> <p>{item.notes}</p>
                    </td>
                  </th>
                </tr>
              ))}
            </thead>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Karpus;
