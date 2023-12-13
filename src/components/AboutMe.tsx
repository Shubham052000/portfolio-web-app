const skills = [
  "ReactJS 16.8+",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind",
  "react-testing-library & jest",
  "git & github",
  "Axios",
  "Redux",
  "NextJs 13+",
  "ReactQuery(Tanstack Query)",
  "GraphQL",
]

const AboutMe = () => {
  return (
    <section id="about" className="text-sm md:text-lg">
      <h2 className="text-md mb-10 pt-20 font-semibold text-primary underline underline-offset-4 md:text-2xl">
        <span>01.&nbsp;</span> About Me
      </h2>
      <p className="mb-5">
        Hello! My name is Shubham and I enjoy creating things that live on the internet. My interest in web development
        started back in 2021 when I joined <span>DXC Technology</span>. I got hired from my campus and worked as a Java
        intern. But, turns out my first project that I got assigned was a full frontend job where I got to know about
        technologies like ReactJS, TypeScript, GraphQL, etc.
      </p>
      <p className="mb-3">Here are a few technologies I’ve been working with recently:</p>
      <ul>
        {skills.map((skill) => (
          <li className="flex items-center gap-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-accented-high"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AboutMe
