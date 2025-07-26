import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaPython, FaGitAlt, FaGithub, FaNpm, FaJava, FaCuttlefish } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiCplusplus,  SiPostman, SiNetlify, SiVercel, SiC, SiStackoverflow, SiRender, SiMui } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";


const skillsData = [
  {
    title: 'Frontend',
    items: [
      { label: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { label: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
      { label: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { label: 'React JS', icon: <FaReact className="text-cyan-400" /> },
      { label: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
      { label: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
      {label: 'Material UI', icon: <SiMui />}
      
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Node JS', icon: <FaNodeJs className="text-green-500" /> },
      { label: 'Express JS', icon: <SiExpress className="text-gray-200" /> },
      { label: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { label: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
      { label: 'PHP', icon: <FaPhp className="text-indigo-400" /> },
    ],
  },
  {
    title: 'Languages',
    items: [
      { label: 'C', icon: <SiC className="text-blue-400" /> },
      { label: 'C++', icon: <SiCplusplus className="text-blue-300" /> },
      { label: 'Java', icon: <FaJava className="text-red-400" /> },
      { label: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { label: 'PHP', icon: <FaPhp className="text-indigo-400" /> },
      { label: 'Python', icon: <FaPython className="text-yellow-300" /> },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
      { label: 'GitHub', icon: <FaGithub className="text-white" /> },
      {label: 'VS Code', icon: <VscVscode className="text-blue-500"/>},
      { label: 'npm', icon: <FaNpm className="text-red-500" /> },
      { label: 'stack overflow', icon: <SiStackoverflow className="text-orange-300" /> },
      { label: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { label: 'Netlify', icon: <SiNetlify className="text-cyan-400" /> },
      { label: 'Vercel', icon: <SiVercel className="text-white" /> },
      { label: 'Render', icon: <SiRender className="text-white" /> },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="bg-hero-bg px-4 md:px-16 py-16 font-inter scroll-mt-5">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center mb-5">
          <h2 className="text-4xl font-poppins font-bold text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through various projects and experience
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsData.map((card) => (
            <div
              key={card.title}
              className="bg-[#1c1c1e] rounded-xl p-6 shadow-xl border border-purple-500/30 flex flex-col items-center"
            >
              <h3 className="text-gray-200 text-xl font-semibold mb-4 font-poppins text-center">{card.title}</h3>
              <div className="flex flex-wrap justify-center">
                {card.items.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex items-center bg-gray-800 text-white rounded-full px-4 py-2 m-2 gap-2 transition-transform duration-200 hover:scale-105 hover:shadow-lg text-2xl"
                  >
                    {skill.icon}
                    <span className="font-medium text-sm font-inter">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 