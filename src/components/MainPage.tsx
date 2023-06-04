import resume from "../static/resume.pdf"

const MainPage = () => {
  return (
    <>
      <section id="hero" className="mx-auto h-screen lg:w-4/5">
        <>
          <h1 className="mb-5 text-sm tracking-wider text-accented-low md:text-lg">Hi, my name is</h1>
          <h2 className="mb-4 text-3xl font-bold text-slate-300 md:text-5xl lg:text-7xl ">Shubham Satyawali.</h2>
          <h3 className="mb-5 text-3xl font-bold md:text-5xl lg:text-7xl">I'm a Frontend developer.</h3>

          <p className="text-md w-4/5 md:text-lg lg:w-2/3">
            I'm a software engineer who takes pleasure in building exceptional frontend experiences using modern webdev
            tools like ReactJS, TypeScript & Tailwind to name a few. Currently, I'm working with{" "}
            <a
              className="group text-accented-high transition-all duration-300 ease-in-out"
              href="https://dxc.com/us/en/"
              target="_blank"
            >
              <span className="bg-gradient-to-r from-accented-high to-accented-high bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 ease-out group-hover:bg-[length:100%_1px]">
                DXC Technology
              </span>
            </a>{" "}
            in providing the best of solutions to our client{" "}
            <a
              href="https://www.nab.com.au/"
              target="_blank"
              className="group text-accented-high transition-all duration-300 ease-in-out"
            >
              <span className="bg-gradient-to-r from-accented-high to-accented-high bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 ease-out group-hover:bg-[length:100%_1px]">
                NAB
              </span>
            </a>
            .
          </p>
        </>
        <a
          className="mt-10 block w-full rounded-md border border-accented-low px-4 py-2 text-center text-accented-high duration-300 active:bg-accented-dark md:hidden"
          href={resume}
          download={"Resume_Shubham_Satyawali"}
        >
          Resume
        </a>
      </section>
    </>
  )
}

export default MainPage
