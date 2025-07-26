import React from 'react'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "CLASHOPIA – Clash Royale Card Explorer",
      description: "Built a responsive, hybrid web app to display Clash Royale cards with modal-based detailed views. Implemented backend using Express.js to fetch, paginate, and serve card data from Clash Royale API securely",
      tech: ["React", "React Bootstrap", "Node.js", "Express.js", "Clash Royale API"],
      github: "https://github.com/wasiqAfnan/Clashopia",
      live: " https://clashopia.vercel.app/",
      borderColor: "border-project-border-1",
      glowColor: "hover:shadow-project-border-1/50"
    },
    {
      id: 2,
      title: "Accessify [Mini-Project]",
      description: "A role-based authentication system built with Node.js, React, JWT, and bcrypt that securely manages user login and registration. It restricts access based on user roles (Admin, User), ensuring protected routes and actions. The frontend uses Tailwind CSS for a responsive, modern UI.",
      tech: ["React", "Tailwind", "Node.js", "Express.js", "JWT", "Bcrypt.js"],
      github: "https://github.com/wasiqAfnan/AutheticationSystemMongoDB",
      live: "https://accessifywasiq.netlify.app/",
      borderColor: "border-project-border-2",
      glowColor: "hover:shadow-project-border-2/50"
    },
    {
      id: 3,
      title: "FULL-STACK EDUCATIONAL PLATFORM",
      description: "Developed a full-stack web platform for managing educational content, student data, and course modules using MERN-style architecture with MySQL. Designed RESTful APIs for user registration, course listing, and content management with authentication.",
      tech: ["React", "Bootstrap", "Mui", "Node.js", "Express.js" ],
      github: "https://github.com/wasiqAfnan/achieverSolutionFullSite.git",
      live: "",
      borderColor: "border-project-border-3",
      glowColor: "hover:shadow-project-border-3/50"
    }
  ]

  const getTechTagColor = (tech) => {
    if (tech === 'React') return 'bg-react-tag text-white'
    if (tech === 'Node.js') return 'bg-js-tag text-black'
    if (tech === 'Express.js') return 'bg-express-tag text-white'
    if (tech === 'Tailwind') return 'bg-tailwind-tag text-black'
    return 'bg-gray-600 text-white'
  }

  return (
    <section id="projects" className="py-20 bg-about-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card bg-base-100 shadow-xl border-2 ${project.borderColor} transform hover:scale-105 transition-all duration-300 hover:shadow-2xl ${project.glowColor}`}
            >
              <div className="card-body">
                <h3 className="card-title text-white font-poppins font-semibold mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 font-inter mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`badge ${getTechTagColor(tech)} font-inter text-xs`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="card-actions justify-end space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    GitHub
                  </a>
                  {project.live && <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Live Demo 
                  </a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 