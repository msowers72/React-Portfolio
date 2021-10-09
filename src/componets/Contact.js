import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    
    

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
    
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (name.length === 0) {
			alert("Please enter a validate name");
			return;
		}
		if (email.length === 0) {
			alert("Please must enter a validate email");
			return;
		}
		if (message.length === 0) {
			alert("Please must enter a vaidate message");
			return;
		}


    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name || !email || !message) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    alert(`Correct info has been entered ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-6">
        <form className="" action="POST">
          <input
            className="form-control"
            name="name"
            value={name}
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            className="form-control"
            name="email"
            value={email}
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            className="form-control"
            name="message"
            value={message}
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />

          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

