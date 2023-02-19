import resume from "../static/resume.pdf";

const Header = () => {
  return (
    <nav className="flex p-2 justify-end ">
      {/* Add image */}
      <div className="text-md flex gap-10 items-center">
        <a href="#" className="hover:text-teal-500 duration-150">
          <span className="text-teal-500">01. &nbsp;</span>About
        </a>

        <a href="#" className=" hover:text-teal-500  duration-150 ">
          <span className="text-teal-500">02. &nbsp;</span>Experience
        </a>
        <a href="#" className=" hover:text-teal-500 duration-150">
          <span className="text-teal-500">03. &nbsp;</span>Work
        </a>
        <a href="#" className=" hover:text-teal-500 150">
          <span className="text-teal-500">04. &nbsp;</span>
          Contact
        </a>
        <a
          className="px-4 py-2 border rounded-md border-teal-300 text-teal-500 hover:bg-teal-900 duration-300"
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
