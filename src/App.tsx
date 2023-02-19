import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="p-6 bg-slate-900 text-slate-300">
        <Header />
        <div className="mt-40 text-slate-400 lg:mt-44">
          <MainPage />
          <div className="lg:w-3/5 mx-auto">
            <AboutMe />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
