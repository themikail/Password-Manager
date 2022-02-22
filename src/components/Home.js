import React from "react";
import "./Home.css";
import Karpus from "../img/karpus.png";
import { Navbar, Nav } from "react-bootstrap";

function Home() {
  return (
    <div className="container">
      <div className="NavBar">
        <img src={Karpus} alt="Karpus_logo" />
        <Nav.Link className="navLinkLogin" href="/login">
          Login
        </Nav.Link>
      </div>

      <div className="ho_bg">
        <h1>Deine Passwörter immer dabei mit</h1>

        <div className="logoMid">
          <img src={Karpus} alt="karpus_logo" />
        </div>

        <div className="ho_bg2">
          <h4>
            Alle Passwörter werden sicher
            <br></br>
            und
            <br></br>
            unzugänglich für dritte gespeichert.
          </h4>

          <a href="/signup">Register</a>
        </div>
        <div className="ho_bg3">
          <h6> 2021 themikail. Alle Rechte vorbehalten.</h6>

          <h6>
            Diese Webseite wurde mit ❤️ nur für den Freundeskreis programmiert,
            <br></br>
            deswegen wird kein Impressum etc. benötigt :)
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Home;
