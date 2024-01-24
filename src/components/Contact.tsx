import { useState } from "react"
import { motion } from "framer-motion"
import { contacts, tickSVG, copySVG, closeSVG } from "../static/contactMe"

const ANIMATE = { translateY: [-5, 0, 5, 0, -5] }
const TRANSITION = { duration: 0.7, repeat: Infinity }

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = "shubham.satyawali.05@gmail.com"

  const contactItemClickHandler = (openInNewPage: boolean, url: string) => {
    if (!openInNewPage) {
      setShowEmail((showEmail) => !showEmail)
      return
    }
    window.open(url)
    setShowEmail(false)
  }
  const copyEmailHandler = () => {
    setCopied(true)
    navigator.clipboard.writeText(email)
    setTimeout(() => {
      setCopied(false)
    }, 4000)
  }
  return (
    <section id="contact" className="mb-20 mt-40 text-sm md:text-lg">
      <h2 className="mb-20 text-center text-sm font-semibold text-accented-high underline underline-offset-4 md:text-lg">
        <span>04.</span> Find me at :
      </h2>
      <div className="mx-auto flex w-1/3 flex-col justify-between gap-10 md:w-1/2 md:flex-row md:items-center">
        {contacts.map(({ title, svg, url, openInNewPage }) => {
          return (
            <div
              key={title}
              className={`group flex min-w-fit flex-col items-center justify-center gap-2 rounded-lg bg-card px-3 py-2 duration-300 md:px-5 md:py-4 ${
                title === "E-mail" ? "order-last" : ""
              } md:order-none`}
              onClick={() => contactItemClickHandler(openInNewPage, url)}
            >
              {svg}
              <p className="text-sm">{title}</p>
            </div>
          )
        })}
      </div>

      <div
        className={`relative mx-auto mt-16 w-min rounded-full bg-card px-8 py-4 text-center text-primary ${
          showEmail ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        <span
          className="absolute right-6 top-3"
          onClick={() => {
            setShowEmail(false)
          }}
        >
          {closeSVG}
        </span>
        <div className="text-accented-low">
          {copied ? (
            <p>
              Copied to clipboard{" "}
              <motion.span className="inline-block" animate={ANIMATE} transition={TRANSITION}>
                🎉
              </motion.span>
            </p>
          ) : (
            <p>
              Drop an email at{" "}
              <motion.span className="inline-block" animate={ANIMATE} transition={TRANSITION}>
                👇
              </motion.span>
              :
            </p>
          )}
        </div>
        <div className="flex items-center justify-center gap-6 ">
          <p className="inline">{email}</p>
          <span onClick={copyEmailHandler}>{copied ? tickSVG : copySVG}</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
