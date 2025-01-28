import React, { useState } from 'react';
import './PopUp.scss';

function PopUp({ buttonText,className}) {
  const [showForm, setShowForm] = useState(false);
  
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button onClick={toggleForm} className="register-btn "  >
        {showForm ? 'Close Registration' : buttonText}
      </button>
      
      {showForm && (
        <div className={`registration-form ${showForm ? 'show' : ''}`}>
          <h2>Registration Form</h2>
          <form>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PopUp;
