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
    <section id="experience" className="mt-40 w-full md:w-3/4">
      <h2 className="pt-20 text-primary text-md md:text-2xl font-semibold mb-10 underline underline-offset-4">
        <span>02.&nbsp;</span> Where I've Worked
      </h2>

      {data.map((job: experienceProps) => {
        return (
          <div key={job.id}>
            <span className="text-sm md:text-xl font-semibold">
              {job.position}{" "}
            </span>
            <a
              href={job.url}
              className="text-sm md:text-xl group text-accented-high transition-all duration-300 ease-in-out font-semibold"
              target="_blank"
            >
              {" "}
              @
              <span className="bg-left-bottom bg-gradient-to-r from-accented-high to-accented-high bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
                {job.title}
              </span>
            </a>
            <span className="block mb-8 text-xs md:text-sm text-primary">
              {job.tenure}
            </span>

            <p className="mb-4 text-sm md:text-lg">{job.description}</p>

            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet.id} className="flex">
                  <span className="text-accented-high text-md md:text-xl pr-5">
                    ▹
                  </span>
                  <span className="text-primary text-sm md:text-lg">
                    {bullet.text}
                  </span>
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
