import { useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import resume from "../static/resume.pdf";

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <>
      <nav
        className={`hidden sticky ${
          scrollDirection === "down" ? "-top-20" : "top-0"
        } h-20 z-10 text-primary md:flex justify-between items-center bg-background bg-opacity-90 px-8 py-3 transition-all duration-500`}
      >
        <a href="#main">
          <img
            src="https://raw.githubusercontent.com/Shubham052000/portfolio-web-app/main/src/static/logo.png"
            className="w-14"
          />
        </a>

        <div className="text-md flex gap-10 items-center">
          <a href="#about" className="hover:text-accented-low duration-150">
            <span className="text-accented-low">01. &nbsp;</span>About
          </a>

          <a
            href="#experience"
            className="hover:text-accented-low duration-150"
          >
            <span className="text-accented-low">02. &nbsp;</span>Experience
          </a>
          <a href="#work" className=" hover:text-accented-low duration-150">
            <span className="text-accented-low">03. &nbsp;</span>Work
          </a>
          <a href="#contact" className=" hover:text-accented-low 150">
            <span className="text-accented-low">04. &nbsp;</span>
            Contact
          </a>
          <a
            className="px-4 py-2 border rounded-md border-accented-high text-accented-low hover:bg-accented-dark duration-300"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav className="flex md:hidden sticky top-0 z-30 text-primary justify-between items-center bg-background bg-opacity-90 px-4 py-2 pt-5">
        <a href="#main">
          <img
            src="https://raw.githubusercontent.com/Shubham052000/portfolio-web-app/main/src/static/logo.png"
            className="w-10"
          />
        </a>

        <button
          className={`${
            showOverlay && "open"
          } rounded-full px-4 py-2 focus:ouline-none hamburger`}
          onClick={() => {
            setShowOverlay((overlay) => !overlay);
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </nav>
      <div
        className={`fixed inset-0 z-20 ${
          showOverlay ? "flex" : "hidden"
        } flex-col items-center self-end w-full h-full min-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-primary uppercase divide-y divide-secondary opacity-90 bg-background`}
      >
        <div className="w-full py-3 text-center">
          <a
            href="#about"
            className="block"
            onClick={() => {
              setShowOverlay(false);
            }}
          >
            About
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a
            href="#experience"
            className="block"
            onClick={() => {
              setShowOverlay(false);
            }}
          >
            Experience
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a
            href="#work"
            className="block"
            onClick={() => {
              setShowOverlay(false);
            }}
          >
            Work
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a
            href="#contact"
            className="block"
            onClick={() => {
              setShowOverlay(false);
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
