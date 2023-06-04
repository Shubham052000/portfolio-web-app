import { useState } from "react"
import { contacts, tickSVG, copySVG } from "../static/contactMe"

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
    <section id="contact" className="mt-40 mb-20 text-sm md:text-lg">
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
        className={`mx-auto mt-16 w-min rounded-full bg-card py-4 px-8 text-center text-primary ${
          showEmail ? "block" : "invisible"
        } `}
      >
        <p className="text-accented-low">{copied ? "Copied to clipboard 🎉" : "Drop an email at 👇:"}</p>
        <div className="flex items-center justify-center gap-6 ">
          <p className="inline">{email}</p>
          <span onClick={copyEmailHandler}>{copied ? tickSVG : copySVG}</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
