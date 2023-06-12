"use client";

import React, { useState } from "react";

import { myProjects } from "@/app/data";

const Portfolio = () => {
  const [allProjects, setAllProjects] = useState(myProjects);
  const [selectedType, setSelectedType] = useState(myProjects[0]);

  const clickedTypeProject = (typeProject) => {
    const filteredTypeProject = myProjects.map((t) =>
      typeProject.id === t.id ? { ...t, active: true } : { ...t, active: false }
    );
    const selectedItem = filteredTypeProject.find((t) => t.active === true);
    setAllProjects(filteredTypeProject);
    setSelectedType(selectedItem);
  };

  return (
    <div
      className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 flex flex-col items-center text-center"
      id="portfolio"
    >
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          My Projects
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Excepturi repudiandae alias ut. Totam aut facilis. Praesentium in
          neque vel omnis. Eos error odio. Qui fugit voluptatibus eum culpa.
        </p>
        <div className="inline-flex gap-5 mt-4">
          {allProjects.map((typeProject) => (
            <button
              type="button"
              className={`rounded-full ${
                typeProject.active
                  ? "bg-bright text-black-dark"
                  : "bg-transparent text-white ring-1 ring-inset ring-gray-300"
              }  px-3 py-1.5 text-sm font-semibold shadow-sm hover:bg-bright hover:text-black-dark transition duration-300 ease-in-out `}
              key={typeProject.id}
              onClick={() => clickedTypeProject(typeProject)}
            >
              {typeProject.title}
            </button>
          ))}
        </div>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
      >
        {selectedType.projects.map((project) => (
          <li
            key={project.title}
            className="relative isolate group flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-24"
          >
            <img
              className="absolute inset-0 -z-10 h-full w-full object-cover"
              src={project.imageUrl}
              alt=""
            />
            <div className="absolute hidden group-hover:block transition-all duration-700 ease-out inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <h3 className="text-white mt-6 text-lg font-semibold leading-8 tracking-tight cursor-default">
              {project.title}
            </h3>
            <p className=" text-base leading-7 text-white cursor-default">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
