import data from "../static/experienceData.json";

type experienceProps = {
  id: number;
  title: string;
  tenure: string;
  position: string;
  description: string;
  bullets: string[];
  url: string;
};

const Experience = () => {
  return (
    <section id="experience" className="mt-40 w-3/4">
      <h2 className="text-primary text-2xl font-semibold mb-10 underline underline-offset-4">
        <span>02.&nbsp;</span> Where I've Worked
      </h2>

      {data.map((job: experienceProps) => {
        return (
          <>
            <span className="text-xl font-semibold text-">{job.position} </span>
            <a
              href={job.url}
              className="text-xl text-accented-high font-semibold inline-block mb-8"
            >
              @{job.title}
            </a>

            <p className="mb-4 text-lg">{job.description}</p>

            <ul>
              {job.bullets.map((bullet) => (
                <li className="flex" key={job.bullets.indexOf(bullet)}>
                  <span className="text-accented-high text-xl pr-5">▹</span>
                  <span className="text-primary text-lg">{bullet}</span>
                </li>
              ))}
            </ul>
          </>
        );
      })}
    </section>
  );
};

export default Experience;
