import React from "react";

export default function Contact() {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-12 col-md-6">
        <form className="needs-validation" action="POST">
          <input className="form-control" type="text" placeholder="Name" />
          <input className="form-control" type="text" placeholder="Email" />
          <input className="form-control" type="text" placeholder="Message" />
        </form>
      </div>
    </div>
  );
}
