import resume from "../static/resume.pdf";

const Header = () => {
  return (
    <nav className="flex p-2 justify-end ">
      {/* Add image */}
      <div className="text-md flex gap-10 items-center">
        <a href="#" className="hover:text-accented-low duration-150">
          <span className="text-accented-low">01. &nbsp;</span>About
        </a>

        <a href="#" className=" hover:text-accented-low  duration-150 ">
          <span className="text-accented-low">02. &nbsp;</span>Experience
        </a>
        <a href="#" className=" hover:text-accented-low duration-150">
          <span className="text-accented-low">03. &nbsp;</span>Work
        </a>
        <a href="#" className=" hover:text-accented-low 150">
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
  );
};

export default Header;
