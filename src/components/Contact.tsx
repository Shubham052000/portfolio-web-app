import { useState } from "react";
import { contacts } from "../static/contactMe";

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const clickHandler = (openInNewPage: boolean, url: string) => {
    if (!openInNewPage) {
      setShowEmail((showEmail) => !showEmail);
      return;
    }
    window.open(url);
    setShowEmail(false);
  };
  return (
    <section id="contact" className="mt-40 text-lg mb-20">
      <h2 className="text-accented-high text-lg font-semibold mb-20 text-center underline underline-offset-4">
        <span>04.</span> Find me at :
      </h2>
      <div className="flex gap-10 justify-around items-center w-1/2 mx-auto">
        {contacts.map(({ title, svg, url, openInNewPage }) => {
          return (
            <div
              key={title}
              className="px-5 py-4 rounded-lg bg-card duration-300 flex flex-col justify-center items-center gap-2"
              onClick={() => clickHandler(openInNewPage, url)}
            >
              {svg}
              {title}
            </div>
          );
        })}
      </div>

      <div
        className={`w-min mt-16 py-4 px-8 bg-card rounded-full text-primary text-center mx-auto ${
          showEmail ? "block" : "invisible"
        } `}
      >
        <p className="text-accented-low">Drop an email at 👇:</p>
        <div className="flex justify-center items-center gap-8">
          <p className="inline">shubham.satyawali.05@gmail.com</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-primary w-6 hover:fill-accented-low"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7 4V2h10v2h3.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7zm0 2H5v14h14V6h-2v2H7V6zm2-2v2h6V4H9z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
