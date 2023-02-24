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
      <div className="bg-background text-primary">
        <Header />
        <div className="p-6 mt-40 text-secondary lg:mt-48">
          <MainPage />
          <div className="p-6 lg:w-3/5 mx-auto">
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
