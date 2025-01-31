import React from "react";

const experiences = [
  {
    year: "2024 - 2025",
    company: "Doutya Private Limited, Bangalore, India",
    roles: [
      "Developed and maintained cross-platform mobile applications using Expo and React Native, ensuring seamless functionality and performance on both iOS and Android platforms.",
      "Implemented and integrated various third-party services and APIs, such as Firebase, Google Maps, and payment gateways, to extend app functionality and provide a richer user experience.",
      "Worked on Software-as-a-Service (SaaS) solutions, contributing to the digital transformation of businesses.",
    ],
  },
  {
    year: "2022 - 2024",
    company: "Smartwebin Software Development Company, Cochin, India",
    roles: [
      "Optimized backend processes in PHP, reducing server response time by 30% and enhancing overall application performance.",
      "Led a cross-functional team to successfully deliver a complex project, meeting all deadlines and exceeding client expectations.",
      "Worked on full-service website and mobile app development projects, improving system efficiency and user experience.",
    ],
  },
];

const Timeline = () => {
  return (
    <section id="contact" className="pt-20 space-y-5">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="space-y-2 px-4 text-center">
          <h2 className="text-color text-3xl md:text-4xl">
            Professional Journey
          </h2>
          <h2 className="text-color text-3xl md:text-4xl">My Experience</h2>
        </div>

        <div className=" px-4 py-10 text-white">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Year Section */}
              <div className="text-right font-semibold text-gray-300 md:whitespace-nowrap">
                {exp.year}
              </div>

              {/* Vertical Line */}
              <div className="relative">
                <div className="w-1 bg-gray-500 absolute left-1/2 transform -translate-x-1/2 h-full"></div>
              </div>

              {/* Company & Roles */}
              <div>
                <div className="bg-[#1c1c1c] text-color px-4 py-2 rounded-lg shadow-md text-lg font-semibold inline-block">
                  {exp.company}
                </div>

                {/* Work Roles */}
                <div className="ml-8 mt-2">
                  {exp.roles.map((role, idx) => (
                    <div
                      key={idx}
                      className="relative flex items-center gap-4 my-3"
                    >
                      <div className="w-3 h-3 bg-blue-100 rounded-full absolute left-[-1.5rem]"></div>
                      <div className="bg-[#1c1c1c] px-4 py-2 rounded-lg shadow-md">
                        {role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
