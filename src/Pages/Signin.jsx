import React, { useState } from "react";
import Navigation_Bar from "./Navigation_Bar";
import AnimatedPage from "../Animation";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";

export default function Signin() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  const submit = async () => {
    try {
      const res = await axios.post("http://localhost:5173", {
        email,
        password:pass,
      });
      if (res.data === "exist") {
        history.navigate("/home", { state: { id: email } });
      } else if (res.data === "not exist") {
        alert("User is not logged in ");
      }
    } catch (e) {
      if (res.data === "exist") {
        history.navigate("/home", { state: { id: email } });
      } else if (res.data === "not exist") {
        alert("User is not logged in ");
      }
      alert("wrong  details ");
      console.error(e);
    }
  };

  return (
    <AnimatedPage>
      <div className="layout">
        <Navigation_Bar />
        <main>
          <div className="main-content">
            <div className="right-section">
              <img
                src="https://source.unsplash.com/random/400x400"
                alt="random image"
              />
            </div>
            <div className="left-section">
              <h1>Sign In</h1>
              <form action="none" onSubmit={handleSubmit}>
                <input
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  value={pass}
                  type="password"
                  id="password"
                  name="password"
                  minLength="8"
                  placeholder="******"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Sign In</button>
                <Link to="/Login">
                  <button>Already have an account? Login here </button>
                </Link>
              </form>
            </div>
          </div>
        </main>
      </div>
    </AnimatedPage>
  );
}
