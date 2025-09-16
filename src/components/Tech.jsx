import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaJava } from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiC,
} from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from "react-icons/bi";
import { MdApi } from "react-icons/md";
import { AiFillHtml5 } from "react-icons/ai";

const Tech = () => {
  const techs = [
    { name: "React", icon: <FaReact size={40} className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
    { name: "TypeScript", icon: <BiLogoTypescript size={40} className="text-sky-500" /> },
    { name: "JavaScript", icon: <BiLogoJavascript size={40} className="text-yellow-500" /> },
    { name: "Node.js", icon: <BiLogoNodejs size={40} className="text-green-400" /> },
    { name: "TailwindCSS", icon: <BiLogoTailwindCss size={40} className="text-sky-400" /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql size={40} className="text-blue-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot size={40} className="text-green-600" /> },
    { name: "API", icon: <MdApi size={40} className="text-purple-600" /> },
    { name: "MySQL", icon: <SiMysql size={40} className="text-blue-700" /> },
    { name: "HTML5", icon: <AiFillHtml5 size={40} className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
    { name: "C", icon: <SiC size={40} className="text-cyan-600" /> },
    { name: "Java", icon: <FaJava size={40} className="text-red-600" /> },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
        {techs.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            {tech.icon}
            <p className="mt-2 text-sm font-medium text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
