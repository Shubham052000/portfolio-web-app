import data from "../static/projectData.json";
import ProjectComponent from "./ProjectComponent";

const Projects = () => {
  return (
    <section id="work" className="mt-40 text-lg">
      <h2 className="pt-20 text-primary text-2xl font-semibold mb-10 underline underline-offset-4">
        <span>03.&nbsp;</span> Check out some of my work
      </h2>
      <ul>
        {data.map((projectData) => (
          <ProjectComponent data={projectData} key={projectData.id} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
