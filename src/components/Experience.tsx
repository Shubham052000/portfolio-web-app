import data from "../static/experienceData.json"

type experienceProps = {
  id: number
  title: string
  tenure: string
  position: string
  description: string
  bullets: {
    id: number
    text: string
  }[]
  url: string
}

const Experience = () => {
  return (
    <section id="experience" className="mt-40 w-full ">
      <h2 className="text-md mb-10 pt-20 font-semibold text-primary underline underline-offset-4 md:text-2xl">
        <span>02.&nbsp;</span> Where I've Worked
      </h2>

      {data.map((job: experienceProps) => {
        return (
          <div key={job.id} className="mb-16">
            <span className="text-sm font-semibold underline underline-offset-4 md:text-xl">{job.position} </span>
            <a
              href={job.url}
              className="group text-sm font-semibold text-accented-high transition-all duration-300 ease-in-out md:text-xl"
              target="_blank"
            >
              {" "}
              @
              <span className="bg-gradient-to-r from-accented-high to-accented-high bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 ease-out group-hover:bg-[length:100%_1px]">
                {job.title}
              </span>
            </a>
            <span className="mb-5 block text-xs text-accented-low md:text-sm">{job.tenure}</span>

            <p className="mb-4 text-sm md:text-lg">{job.description}</p>

            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet.id} className="flex">
                  <span className="text-md pr-5 text-accented-high md:text-xl">▹</span>
                  <span className="text-sm text-primary md:text-lg">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </section>
  )
}

export default Experience
