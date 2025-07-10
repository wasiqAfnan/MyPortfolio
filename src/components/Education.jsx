import React from 'react'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      id: 1,
      year: "2024 - present",
      degree: "Master of Computer Applications",
      institution: "University of Technology",
      description: "Specialized in Software Engineering with focus on web development and database systems."
    },
    {
      id: 2,
      year: "2018 - 2020",
      degree: "Associate Degree in Information Technology",
      institution: "Community College",
      description: "Foundation in programming, networking, and system administration."
    }
  ]

  return (
    <section id="education" className="py-20 bg-about-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            {educationData.map((item, index) => (
              <div key={item.id} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-base-100 shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-16">
                  <div className="card bg-base-100 shadow-xl border border-base-300">
                    <div className="card-body">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-xl font-poppins font-semibold text-white">
                          {item.degree}
                        </h3>
                        <span className="badge badge-primary font-inter mt-2 lg:mt-0">
                          {item.year}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-poppins font-medium text-secondary mb-3">
                        {item.institution}
                      </h4>
                      
                      <p className="text-gray-300 font-inter leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education 