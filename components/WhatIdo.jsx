import {
  Brain,
  Cloud,
  Code,
  Database,
  Layout,
  Link,
  Smartphone,
} from "lucide-react";
import React from "react";

const WhatIdo = () => {
  const whatidooo = [
    {
      title: "Full Stack Development",
      icon: Code,
      description:
        "Building scalable web applications with modern frameworks like Next.js, React, and Node.js.",
    },
    {
      title: "React Native App Development",
      icon: Smartphone,
      description:
        "Creating high-performance cross-platform mobile apps using React Native and Expo.",
    },
    {
      title: "Frontend Development",
      icon: Layout,
      description:
        "Designing sleek, user-friendly interfaces with Tailwind CSS and advanced UI frameworks.",
    },
    {
      title: "Backend & Database Management",
      icon: Database,
      description:
        "Developing secure and optimized backends using Prisma, MySQL, MongoDB, and Express.js.",
    },
    {
      title: "API Development & Integration",
      icon: Link,
      description:
        "Building RESTful and GraphQL APIs to integrate with various services and third-party platforms.",
    },
    {
      title: "Cloud Deployment & DevOps",
      icon: Cloud,
      description:
        "Deploying applications with Vercel, AWS, and Docker for high availability and performance.",
    },
  ];

  return (
    <section id="what-i-do" className="pt-20 text-center space-y-5">
      <div className="space-y-2 px-4">
        <h2 className="text-color text-3xl md:text-4xl">
          Collaborate with brands and agencies to
        </h2>
        <h2 className="text-color text-3xl md:text-4xl">
          create impactful results
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-10">
        {whatidooo.map((item, index) => {
          const IconComponent = item.icon; // Extract the component

          return (
            <div
              key={index}
              className="p-6 bg-[#1c1c1c] rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <IconComponent size={40} className="text-white mb-4" />
              <h3 className="text-xl font-semibold text-color">{item.title}</h3>
              <p className="text-color mt-2">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatIdo;
