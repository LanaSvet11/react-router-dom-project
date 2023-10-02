import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Website Name
    </footer>
  );
};

export default Footer;
