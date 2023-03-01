import React from "react";

type dataObject = {
  id: number;
  title: string;
  image: string;
  toolsUsed: string[];
  sourceCode: string;
  liveDemo: string | undefined;
  description: string;
};

const ProjectComponent = ({ data }: { data: dataObject }) => {
  return (
    <li className="bg-card px-4 py-4 md:px-6 md:py-6 lg:px-16 lg:py-8 rounded-md mb-4 flex flex-col md:flex-row gap-4 md:gap-32 items-center overflow-hidden">
      <div className="basis-2/3">
        <p className="text-sm text-accented-low">Featured Project</p>
        <a
          href={data.sourceCode}
          className="text-3xl font-bold block mb-5 hover:text-accented-high duration-500"
          target="_blank"
        >
          {data.title}
        </a>
        <p className="mb-5">{data.description}</p>
        <div className="flex items-center flex-wrap gap-1">
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
