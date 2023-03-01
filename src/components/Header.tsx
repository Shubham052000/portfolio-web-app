const Header = () => {
  return (
    <nav className="invisible sticky top-0 z-10 text-primary flex justify-between items-center bg-background bg-opacity-90 px-8 py-3 md:visible">
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

        <a href="#experience" className="hover:text-accented-low duration-150">
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
          href={
            "https://github.com/Shubham052000/portfolio-web-app/blob/main/src/static/resume.pdf"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      {/* Add image */}
    </nav>
  );
};

export default Header;
