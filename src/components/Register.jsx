import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  return (
    <div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Example textarea</label>
        <input class="form-control"></input>
      </div>
    </div>
  );
};

export default Register;
