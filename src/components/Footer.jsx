import React from "react";

function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "2rem 0 1rem 0",
      color: "black",
      background: "none",
      fontSize: "1rem"
    }}>
      &copy; {new Date().getFullYear()} Sai Ram
    </footer>
  );
}
export default Footer;   