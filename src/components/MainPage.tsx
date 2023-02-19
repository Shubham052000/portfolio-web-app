const MainPage = () => {
  return (
    <>
      <section id="hero" className="h-screen lg:w-3/5 mx-auto">
        <>
          <h1 className="text-lg text-teal-500 mb-5 tracking-wider">
            Hi, my name is
          </h1>
          <h2 className="text-7xl font-bold text-slate-300 mb-4 ">
            Shubham Satyawali.
          </h2>
          <h3 className="text-7xl font-bold mb-5">I'm a Frontend developer.</h3>

          <p className="text-lg w-4/5 lg:w-1/2">
            I'm a software engineer specializing in building (and occassionaly
            designing) exceptional digital experiences. Currently, I'm focused
            on building front-end ReactJS applications with{" "}
            <a
              className="group text-teal-300 transition-all duration-300 ease-in-out"
              href="https://dxc.com/us/en/"
              target="_blank"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-teal-300 to-teal-300 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
                DXC Technology
              </span>
            </a>
            .
          </p>
        </>
      </section>
    </>
  );
};

export default MainPage;
