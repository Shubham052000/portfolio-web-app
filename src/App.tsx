import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";
import TestComp from "./components/TestComp";

function App() {
  return (
    <div id="main" className="bg-background text-primary overflow-x-clip">
      <Header />
      <div className="p-10 pt-40 text-secondary lg:mt-48">
        <MainPage />
        <div className="p-6 lg:w-3/5 mx-auto">
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>

      <Footer />
      <TestComp />
    </div>
  );
}

export default App;
