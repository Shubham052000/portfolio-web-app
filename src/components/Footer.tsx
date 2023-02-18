import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-30">
      <p className="text-sm">
        Built by{" "}
        <span className="font-semibold underline underline-offset-4 text-teal-300">
          Shubham Satyawali
        </span>{" "}
        Design inspired from{" "}
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          className="text-teal-300 hover:underline underline-offset-4"
        >
          Brittany Chiang
        </a>
      </p>
    </footer>
  );
};

export default Footer;
