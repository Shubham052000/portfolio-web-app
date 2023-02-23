const AboutMe = () => {
  return (
    <section id="about" className="text-lg">
      <h2 className="pt-20 text-2xl text-primary font-semibold mb-10 underline underline-offset-4">
        <span>01.&nbsp;</span> About Me
      </h2>
      <p className="mb-5">
        Hello! My name is Shubham and I enjoy creating things that live on the
        internet. My interest in web development started back in 2021 when I
        joined <span>DXC Technology</span>. I got hired from my campus and
        worked as a Java intern. But, turns out my first project that I got
        assigned was a full frontend job where I got to know about technologies
        like ReactJS, TypeScript, GraphQL, etc.
      </p>
      <p className="mb-3">
        Here are a few technologies I’ve been working with recently:
      </p>
      <ul>
        <li className="flex items-center gap-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-accented-high"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          JavaScript (ES6+)
        </li>
        <li className="flex items-center gap-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-accented-high"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          TypeScript
        </li>
        <li className="flex items-center gap-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-accented-high"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          ReactJs (v16.8+)
        </li>
        <li className="flex items-center gap-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-accented-high"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          Tailwind CSS
        </li>
        <li className="flex items-center gap-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-accented-high"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          GraphQL
        </li>
      </ul>
    </section>
  );
};

export default AboutMe;
