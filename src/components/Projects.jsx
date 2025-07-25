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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend, Node.js backend, and MongoDB database. Features include user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/wasiq/ecommerce-platform",
      live: "https://ecommerce-demo.com",
      borderColor: "border-project-border-1",
      glowColor: "hover:shadow-project-border-1/50"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "TypeScript", "Socket.io", "Express"],
      github: "https://github.com/wasiq/task-manager",
      live: "https://task-manager-demo.com",
      borderColor: "border-project-border-2",
      glowColor: "hover:shadow-project-border-2/50"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather and forecasts using OpenWeatherMap API with beautiful animations and charts.",
      tech: ["React", "JavaScript", "Chart.js", "CSS3"],
      github: "https://github.com/wasiq/weather-dashboard",
      live: "https://weather-demo.com",
      borderColor: "border-project-border-3",
      glowColor: "hover:shadow-project-border-3/50"
    }
  ]

  const getTechTagColor = (tech) => {
    if (tech === 'React') return 'bg-react-tag text-white'
    if (tech === 'JavaScript') return 'bg-js-tag text-black'
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
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Live Demo
                  </a>
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