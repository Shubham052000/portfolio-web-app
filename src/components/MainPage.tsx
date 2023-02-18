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
              className="text-teal-300 hover:underline underline-offset-4"
              href="https://dxc.com/us/en/"
              target="_blank"
            >
              DXC Technology
            </a>
            .
          </p>
        </>
      </section>
    </>
  );
};

export default MainPage;
