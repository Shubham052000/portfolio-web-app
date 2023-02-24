import data from "../static/experienceData.json";

type experienceProps = {
  id: number;
  title: string;
  tenure: string;
  position: string;
  description: string;
  bullets: {
    id: number;
    text: string;
  }[];
  url: string;
};

const Experience = () => {
  return (
    <section id="experience" className="mt-40 w-3/4">
      <h2 className="pt-20 text-primary text-2xl font-semibold mb-10 underline underline-offset-4">
        <span>02.&nbsp;</span> Where I've Worked
      </h2>

      {data.map((job: experienceProps) => {
        return (
          <div key={job.id}>
            <span className="text-xl font-semibold text-">{job.position} </span>
            <a
              href={job.url}
              className="text-xl text-accented-high font-semibold inline-block "
            >
              @{job.title}
            </a>
            <span className="block mb-8 text-sm text-primary">
              {job.tenure}
            </span>

            <p className="mb-4 text-lg">{job.description}</p>

            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet.id} className="flex">
                  <span className="text-accented-high text-xl pr-5">▹</span>
                  <span className="text-primary text-lg">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
