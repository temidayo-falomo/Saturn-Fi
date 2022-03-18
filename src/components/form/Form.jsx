import React from "react";
import "./Form.css";

function Form() {
  return (
    <section>
      <div className="form-container">
        <h2>We are more than happy to help out.</h2>
        <form action="submit">
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Full Name
            </label>
            <input
              id="username"
              type="text"
              name="text"
              className="form-input"
              required
            />
          </div>

          <div className="flex-div">
            <div className="form-inputs">
              <label htmlFor="username" className="form-label">
                Mobile Number
              </label>
              <input
                id="number"
                type="text"
                name="number"
                className="form-input"
                required
              />
            </div>

            <div className="form-inputs">
              <label htmlFor="username" className="form-label">
                Email
              </label>
              <input
                id="username"
                type="email"
                name="email"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="message-input">
            <label htmlFor="username" className="form-label">
              Message
            </label>
            <textarea
              id="w3review"
              name="w3review"
              rows="8"
              cols="50"
            ></textarea>
          </div>

          <button className="form-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
