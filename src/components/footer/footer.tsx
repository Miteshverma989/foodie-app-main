import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
          <p>NextLevel Food</p>
          <p>|</p>
          <p>
            Created with ❤️ by{" "}
            <a href="https://www.linkedin.com/in/mitesh-verma-057118178/" target="_blank">
              Mitesh Verma
            </a>
          </p>
      </footer>
    </>
  );
};

export default Footer;
