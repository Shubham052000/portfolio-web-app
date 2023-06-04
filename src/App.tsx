import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainPage from "./components/MainPage"
import Projects from "./components/Projects"

function App() {
  return (
    <div id="main" className="overflow-x-clip bg-background text-primary">
      <Header />
      <div className="p-10 pt-40 text-secondary md:mt-28 lg:mt-0 xl:mt-16">
        <MainPage />
        <div className="mx-auto p-6 lg:w-3/5">
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
