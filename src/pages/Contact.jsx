import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input type="text" className="form-control" id="contact" placeholder="Enter your phone number" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="6" placeholder="Type your Message Here"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Contact Us</button>
      </form>
    </div>
  );
};

export default Contact;
