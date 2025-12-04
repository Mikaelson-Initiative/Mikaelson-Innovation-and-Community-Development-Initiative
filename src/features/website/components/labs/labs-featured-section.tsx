"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  status: string;
  tags: string[];
  link?: string;
};
const projects: Project[] = [
  {
    id: 1,
    title: "OpenTutor AI",
    category: "education",
    description: "Connecting students with mentors across Nigeria",
    image: "/assets/images/mikaelsonlogo.png",
    status: "active",
    tags: ["Vue", "Node", "MongoDB"],
  },
  {
    id: 2,
    title: "HealthTech Initiative",
    category: "healthcare",
    description: "Telemedicine platform for rural communities",
    image: "/assets/images/mikaelsonlogo.png",
    status: "completed",
    tags: ["React", "Python", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Smart Agriculture",
    category: "agriculture",
    description: "IoT solutions for modern farming",
    image: "/assets/images/mikaelsonlogo.png",
    status: "development",
    tags: ["IoT", "ML", "Sensors"],
  },
  {
    id: 4,
    title: "PropertyInsight",
    category: "real-estate",
    description:
      "Data-driven platform optimizing property valuation and urban planning.",
    image: "/assets/images/mikaelsonlogo.png",
    status: "active",
    tags: ["Analytics", "GIS", "Vue"],
  },
  {
    id: 5,
    title: "RentalHub NG",
    category: "real-estate",
    description:
      "Platform simplifying rental property discovery, verification and tenant landlord management across Nigerian cities.",
    image: "/assets/images/Rental hub.jpeg",
    status: "development",
    tags: ["Vue", "Express", "GIS"],
    link: "https://rentalhub.ng",
  },
];

 const filters = [
   "All",
   "education",
   "healthcare",
   "agriculture",
   "real-estate",
 ];

const LabsFeaturedProjects: React.FC = () => {
 

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl dark:text-brand-text-dark-heading font-extrabold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-brand-text-dark">
            Discover our current initiatives and their impact on communities
            across Africa.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-indigo-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow hover:shadow-xl overflow-hidden cursor-pointer transition transform hover:-translate-y-1"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={280}
                  width={280}
                  className="w-full h-56 object-cover"
                />
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full capitalize ${
                    project.status === "active"
                      ? "bg-green-100 text-green-700"
                      : project.status === "completed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-indigo-600"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl max-w-lg w-full shadow-lg relative overflow-hidden">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>
                <Image
                  width={320}
                  height={400}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-gray-600">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg shadow mt-4"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LabsFeaturedProjects;
