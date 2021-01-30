import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact-us"></Title>
          <form className="mt-5">
            {/*first */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Dinesh Maraothiya"
              />
            </div>
            {/*email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email@email.com"
              />
            </div>
            {/*subject */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="important!!!!"
              />
            </div>
            {/*message */}
            <div className="form">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="Hello, there buddy...."
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}