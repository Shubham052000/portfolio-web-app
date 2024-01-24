import { useState } from "react"
import { motion } from "framer-motion"

import useScrollDirection from "../hooks/useScrollDirection"
import resume from "../static/resume.pdf"

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const scrollDirection = useScrollDirection()

  return (
    <>
      <nav
        className={`sticky hidden ${
          scrollDirection === "down" ? "-top-20" : "top-0"
        } z-10 h-20 items-center justify-between bg-background bg-opacity-90 px-8 py-3 text-primary transition-all duration-500 md:flex`}
      >
        <a href="#main">
          <img
            src="https://raw.githubusercontent.com/Shubham052000/portfolio-web-app/main/src/static/logo.png"
            className="w-14"
          />
        </a>

        <div className="text-md flex items-center gap-10">
          <a href="#about" className="duration-150 hover:text-accented-low">
            <span className="text-accented-low">01. &nbsp;</span>About
          </a>

          <a href="#experience" className="duration-150 hover:text-accented-low">
            <span className="text-accented-low">02. &nbsp;</span>Experience
          </a>
          <a href="#work" className=" duration-150 hover:text-accented-low">
            <span className="text-accented-low">03. &nbsp;</span>Work
          </a>
          <a href="#contact" className=" 150 hover:text-accented-low">
            <span className="text-accented-low">04. &nbsp;</span>
            Contact
          </a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.05 }}
            className="rounded-md border border-accented-high px-4 py-2 text-accented-low duration-300 hover:bg-accented-dark"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </motion.a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`sticky flex ${
          scrollDirection === "down" ? "-top-14" : "top-0"
        } z-30 h-14 items-center justify-between bg-background bg-opacity-90 px-4 py-2 pt-5 text-primary duration-200 md:hidden`}
      >
        <a href="#main">
          <img
            src="https://raw.githubusercontent.com/Shubham052000/portfolio-web-app/main/src/static/logo.png"
            className="w-10"
          />
        </a>

        <button
          className={`${showOverlay && "open"} focus:ouline-none hamburger rounded-full px-4 py-2`}
          onClick={() => {
            setShowOverlay((overlay) => !overlay)
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </nav>
      <div
        className={`fixed inset-0 z-20 ${
          showOverlay ? "flex" : "hidden"
        } h-full min-h-screen w-full flex-col items-center divide-y divide-secondary self-end bg-background px-6 py-1 pb-4 pt-24 uppercase tracking-widest text-primary opacity-90`}
      >
        <div className="w-full py-3 text-center">
          <a
            href="#about"
            className="block"
            onClick={() => {
              setShowOverlay(false)
            }}
          >
            About
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a
            href="#experience"
            className="block"
            onClick={() => {
              setShowOverlay(false)
            }}
          >
            Experience
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a
            href="#work"
            className="block"
            onClick={() => {
              setShowOverlay(false)
            }}
          >
            Work
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a
            href="#contact"
            className="block"
            onClick={() => {
              setShowOverlay(false)
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
