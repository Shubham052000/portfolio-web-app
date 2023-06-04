import { externalLinkSVG, githubSVG } from "../static/contactMe"

type dataObject = {
  id: number
  title: string
  image: string
  toolsUsed: string[]
  sourceCode: string
  liveDemo: string | undefined
  description: string
  index: number
}

const ProjectComponent = ({ data }: { data: dataObject }) => {
  return (
    <li className="mb-4 flex flex-col items-center gap-4 overflow-hidden rounded-md bg-card px-4 py-4 md:flex-row md:gap-32 md:px-6 md:py-6 lg:px-16 lg:py-8">
      <div className="basis-2/3">
        <p className=" mb-4 text-center text-3xl font-bold text-light md:text-left md:text-5xl">
          {data.index < 10 ? "0" + data.index : data.index}.
        </p>
        <div className="mb-2 flex items-center justify-center gap-2 md:justify-between ">
          <p className="col-span-2 text-xl font-bold text-primary md:text-3xl">{data.title}</p>
          <a href={data.sourceCode} target="_blank">
            {githubSVG}
          </a>
        </div>
        <p className="mb-5 text-center md:text-left">{data.description}</p>
        <div className="flex flex-wrap justify-center gap-1 md:justify-start">
          {data.toolsUsed.map((tool) => {
            return (
              <span
                key={data.toolsUsed.indexOf(tool)}
                className="mb-2 rounded-full border border-accented-low px-2 py-1 text-center text-sm text-accented-high duration-500 hover:bg-accented-dark"
              >
                {tool}
              </span>
            )
          })}
        </div>
      </div>

      <a href={data.liveDemo} target="_blank">
        <img src={data.image} className="h-56 w-96 basis-1/3 rounded-lg object-cover duration-300 hover:scale-110" />
      </a>
    </li>
  )
}

export default ProjectComponent
