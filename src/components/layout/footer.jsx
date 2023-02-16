import React from "react";

function Footer({ dark, updateDark }) {
  return (
    <>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">Powered by Geeks - {new Date().getFullYear()} Copyright © </span>
        </div>

      </footer>
    </>
  );
}
export default Footer;
