import data from "../static/projectData.json"
import ProjectComponent from "./ProjectComponent"

const Projects = () => {
  return (
    <section id="work" className="mt-40 text-sm md:text-lg">
      <h2 className="text-md mb-10 pt-20 font-semibold text-primary underline underline-offset-4 md:text-2xl">
        <span>03.&nbsp;</span> Check out some of my work
      </h2>
      <ul>
        {data.mainProjects.map((projectData, index) => (
          <ProjectComponent key={projectData.id} data={{ ...projectData, index: index + 1 }} />
        ))}
      </ul>
    </section>
  )
}

export default Projects
