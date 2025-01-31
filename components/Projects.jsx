"use client";
import { getProjects2 } from "@/actions/project";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const project = await getProjects2();
      setProjects(project);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 text-center space-y-5">
      <div className="space-y-2 px-4">
        <h2 className="text-color text-3xl md:text-4xl">My Projects</h2>
        <p className="text-lg text-gray-400">A glimpse of my work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-10">
        {isLoading
          ? Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#1c1c1c] rounded-xl shadow-lg flex flex-col items-center text-center animate-pulse"
                >
                  <div className="w-full h-40 bg-gray-700 rounded-md"></div>
                  <div className="w-3/4 h-6 bg-gray-600 mt-4 rounded"></div>
                  <div className="w-5/6 h-4 bg-gray-600 mt-2 rounded"></div>
                  <div className="w-1/2 h-4 bg-gray-600 mt-2 rounded"></div>
                </div>
              ))
          : projects?.length > 0 &&
            projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-[#1c1c1c] rounded-xl shadow-lg flex flex-col items-center text-center"
              >
                <div className="w-full h-40 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-color mt-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="mt-4 text-blue-400 hover:underline"
                >
                  View Project
                </Link>
              </div>
            ))}
      </div>
    </section>
  );
};

export default Projects;
