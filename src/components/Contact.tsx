import { useState } from "react";
import { contacts, tickSVG, copySVG } from "../static/contactMe";

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "shubham.satyawali.05@gmail.com";
  const emailClickHandler = (openInNewPage: boolean, url: string) => {
    if (!openInNewPage) {
      setShowEmail((showEmail) => !showEmail);
      return;
    }
    window.open(url);
    setShowEmail(false);
  };
  const copyEmailHandler = () => {
    setCopied(true);
    navigator.clipboard.writeText(email);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };
  return (
    <section id="contact" className="mt-40 text-sm md:text-lg mb-20">
      <h2 className="text-accented-high text-sm md:text-lg font-semibold mb-20 text-center underline underline-offset-4">
        <span>04.</span> Find me at :
      </h2>
      <div className="flex flex-col md:flex-row gap-10 justify-between md:items-center w-1/3 md:w-1/2 mx-auto">
        {contacts.map(({ title, svg, url, openInNewPage }) => {
          return (
            <div
              key={title}
              className="px-3 py-2 md:px-5 md:py-4 rounded-lg bg-card duration-300 flex flex-col justify-center items-center gap-2 min-w-fit"
              onClick={() => emailClickHandler(openInNewPage, url)}
            >
              {svg}
              <p className="text-sm">{title}</p>
            </div>
          );
        })}
      </div>

      <div
        className={`w-min mt-16 py-4 px-8 bg-card rounded-full text-primary text-center mx-auto ${
          showEmail ? "block" : "invisible"
        } `}
      >
        <p className="text-accented-low">
          {copied ? "Copied to clipboard 🎉" : "Drop an email at 👇:"}
        </p>
        <div className="flex justify-center items-center gap-6 ">
          <p className="inline">{email}</p>
          <span onClick={copyEmailHandler}>{copied ? tickSVG : copySVG}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
