import React, { useState } from "react";
import axios from "axios";
import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      // ტოკენის მიღება და შენახვა
      localStorage.setItem("token", response.data.token);
      setMessage("შესვლა წარმატებით დასრულდა!");
      setShowForm("")
    } catch (error) {
      setMessage("შეცდომა შესვლისას");
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button onClick={toggleForm} className="register-btn">
        Sign In
      </button>

      {showForm && (
        <div className={`login-form ${showForm ? "show" : ""}`}>
          <FontAwesomeIcon
                      icon={faXmark}
                      onClick={toggleForm}
                      style={{
                        color: "#007bff ",
                        fontSize: "24px",
                        float: "right",
                        cursor: "pointer",
                      }}
                    />
          <h2>შესვლა</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="ელ.ფოსტა"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="პაროლი"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">შესვლა</button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      )}
    </div>
  );
}

export default Login;
