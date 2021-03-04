import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! Not Fund </h1>
        <img
          src="https://www.getcredo.com/wp-content/uploads/2018/12/Image_0.png"
          alt="404"
        />
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
      </div>
    </section>
  );
}
export default Error;
