import React, { useState } from "react";
import "./Register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Register({ buttonText, className }) {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    let newError = { email: "", password: "", confirmPassword: "" };

    // Email validation
    if (!validateEmail(formData.email)) {
      isValid = false;
      newError.email = "გთხოვთ, შეიყვანოთ სწორი მეილის მისამართი.";
    }

    // Password validation
    if (!validatePassword(formData.password)) {
      isValid = false;
      newError.password =
        "პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, ციფრს და სპეციალურ სიმბოლოს.";
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      isValid = false;
      newError.confirmPassword = "პაროლები არ ემთხვევა";
    }

    if (!isValid) {
      setError(newError);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        email: formData.email,
        password: formData.password,
      });

      setMessage(response.data.message);
      setFormData({ email: "", password: "", confirmPassword: "" });
      setError({ email: "", password: "", confirmPassword: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Server error");
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button onClick={toggleForm} className="register-btn">
        {showForm ? "Close Registration" : buttonText}
      </button>

      {showForm && (
        <div className={`registration-form ${showForm ? "show" : ""}`}>
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
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {error.email && (
                <p className="error-message">{error.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {error.password && (
                <p className="error-message">{error.password}</p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {error.confirmPassword && (
                <p className="error-message">{error.confirmPassword}</p>
              )}
            </div>
            <button type="submit">Submit</button>
            {message && <p className="success-message">{message}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default Register;
