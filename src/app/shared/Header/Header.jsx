import React from "react";

const Header = () => {
  return (
    <header className="container-fluid bg-primary py-2 fixed-top">
      <div className="container d-flex justify-content-between px-3">
        <h3 className="text-white">Interview Reports</h3>

        <button type="button" className="btn text-primary bg-light">
          Candidates
        </button>
      </div>
    </header>
  );
};

export default Header;