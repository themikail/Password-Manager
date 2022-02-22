import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Karpus from "../img/karpus.png";

function NavBar() {
  return (
    <div>
      <Navbar style={{ background: "#40e0d0" }}>
        <Navbar.Brand href="/karpus">
          <img style={{ width: "70px" }} src={Karpus} alt="Karpus_logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              style={{ color: "#fffaed", fontWeight: "500" }}
              href="/karpus"
            >
              Karpus
            </Nav.Link>
            {/*  <Nav.Link
              style={{ color: "#fffaed", fontWeight: "600" }}
              href="/add"
            >
              Yeni Ekle
            </Nav.Link>
            <Nav.Link
              style={{ color: "#fffaed", fontWeight: "600" }}
              href="/view"
            >
              Kayıtları görüntüle
            </Nav.Link>
            <Nav.Link
              style={{ color: "#fffaed", fontWeight: "600" }}
              href="/edit"
            >
              İşlem
            </Nav.Link> */}
            <Nav.Link
              href="/signout"
              style={{ textAlign: "end", color: "red", fontWeight: 500 }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default React.memo(NavBar);
