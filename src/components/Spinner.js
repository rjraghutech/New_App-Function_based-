import React from "react";

const Spinner = () => {
  return (
    <div>
      <button className="btn btn-dark" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm text-centre"
          style={{ width: "1rem", height: "1rem" }}
          role="status"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
};

export default Spinner;
