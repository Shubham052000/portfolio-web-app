const MainPage = () => {
  return (
    <>
      <section id="hero" className="h-screen lg:w-4/5 mx-auto">
        <>
          <h1 className="text-sm md:text-lg text-accented-low mb-5 tracking-wider">
            Hi, my name is
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-300 mb-4 ">
            Shubham Satyawali.
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-5">
            I'm a Frontend developer.
          </h3>

          <p className="text-md md:text-lg w-4/5 lg:w-2/3">
            I'm a software engineer who takes pleasure in building exceptional
            frontend experiences using ReactJS library. Currently, I'm working
            with{" "}
            <a
              className="group text-accented-high transition-all duration-300 ease-in-out"
              href="https://dxc.com/us/en/"
              target="_blank"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-accented-high to-accented-high bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
                DXC Technology
              </span>
            </a>{" "}
            in providing the best of solutions to{" "}
            <a
              href="https://www.nab.com.au/"
              target="_blank"
              className="group text-accented-high transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-accented-high to-accented-high bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
                NAB
              </span>
            </a>{" "}
            (client) .
          </p>
        </>
      </section>
    </>
  );
};

export default MainPage;
