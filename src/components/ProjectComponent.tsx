import { externalLinkSVG, githubSVG } from "../static/contactMe";

type dataObject = {
  id: number;
  title: string;
  image: string;
  toolsUsed: string[];
  sourceCode: string;
  liveDemo: string | undefined;
  description: string;
  index: number;
};

const ProjectComponent = ({ data }: { data: dataObject }) => {
  return (
    <li className="bg-card px-4 py-4 md:px-6 md:py-6 lg:px-16 lg:py-8 rounded-md mb-4 flex flex-col md:flex-row gap-4 md:gap-32 items-center overflow-hidden">
      <div className="basis-2/3">
        <p className=" text-3xl md:text-5xl text-center md:text-left text-light font-bold mb-4">
          {data.index < 10 ? "0" + data.index : data.index}.
        </p>
        <div className="flex justify-center items-center gap-2 md:justify-between mb-2 ">
          <p className="text-xl text-primary font-bold md:text-3xl col-span-2">
            {data.title}
          </p>
          <a href={data.sourceCode} target="_blank">
            {githubSVG}
          </a>
        </div>
        <p className="text-center md:text-left mb-5">{data.description}</p>
        <div className="flex flex-wrap gap-1 justify-center md:justify-start">
          {data.toolsUsed.map((tool) => {
            return (
              <span
                key={data.toolsUsed.indexOf(tool)}
                className="text-sm text-center border border-accented-low text-accented-high px-2 py-1 rounded-full hover:bg-accented-dark duration-500 mb-2"
              >
                {tool}
              </span>
            );
          })}
        </div>
      </div>

      <a href={data.liveDemo} target="_blank">
        <img
          src={data.image}
          className="object-cover h-56 w-96 basis-1/3 rounded-lg hover:scale-110 duration-300"
        />
      </a>
    </li>
  );
};

export default ProjectComponent;
