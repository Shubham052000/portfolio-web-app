const Footer = () => {
  return (
    <footer className="text-center pb-16">
      <p className="text-xs md:text-md">
        Built by{" "}
        <span className="font-semibold text-accented-high">
          Shubham Satyawali
        </span>{" "}
        Design inspired from{" "}
        <a
          className="group text-accented-high transition-all duration-300 ease-in-out"
          href="https://github.com/bchiang7/v4"
          target="_blank"
        >
          <span className="bg-left-bottom bg-gradient-to-r from-accented-high to-accented-high bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
            Brittany Chiang
          </span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
