import React from "react";
import "./styles.scss";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1>Contact us</h1>
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" />
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress">Email Address</label>
          <input type="email" id="emailAddress" name="emailAddress" />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" />
        </div>
        <div className="form-group">
          <label htmlFor="query">Query</label>
          <textarea id="query" name="query"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="supportRequired">Support Required on</label>
          <select id="supportRequired" name="supportRequired">
            <option value="">Select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="form-group email-info">
          <p>You can also email us directly at: <a href="mailto:sales@sbainfo.in">sales@sbainfo.in</a></p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
