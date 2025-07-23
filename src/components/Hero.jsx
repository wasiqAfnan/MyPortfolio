import React from 'react'
import { useInView } from 'react-intersection-observer'
import rightImage from '../assets/undraw_developer-avatar_f6ac.svg'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToProjects = () => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = "../assets/WasiqAfnanResume.pdf";
    link.download = "Wasiq-Afnan-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section id="home" className="min-h-screen bg-hero-bg flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and Buttons */}
          <div
            ref={ref}
            className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight">
                Hi, I'm <span className="text-primary">Wasiq Afnan</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 font-inter">
                Full Stack Developer
              </p>
              <p className="text-lg text-gray-400 font-inter max-w-lg">
                I create beautiful, functional, and user-centered digital experiences that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="btn btn-lg bg-primary-btn hover:bg-primary-btn/80 text-white border-0 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary-btn/50"
              >
                View Projects
              </button>
              <button
                onClick={downloadResume}
                className="btn btn-lg btn-error hover:bg-secondary-btn/80 text-white border-0 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-btn/50"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Right side - Coding SVG Illustration */}
          {/* <div className="flex justify-center hidden md:flex justify-center">
            <div className="w-full max-w-md">
              <img 
                src={rightImage} 
                alt="Coding Illustration" 
                className="rounded-full border-4 border-[#9255f6] shadow-[0_0_10px_#9255f6]" 
              />
            </div>
          </div> */}


          <div
            ref={rightRef}
            className={`flex justify-center relative hidden md:flex transition-all duration-1000 ${rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {/* Main Avatar Bubble */}
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">W</span>
                  </div>
                  <p className="text-white font-poppins font-semibold">Wasiq Afnan Ansari</p>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>

            {/* Floating bubbles – now aligned better */}
            <div className="absolute top-[30px] right-[80px] w-7 h-7 bg-project-border-1 rounded-full animate-pulse"></div>
            <div className="absolute bottom-[30px] left-[80px] w-5 h-5 bg-project-border-2 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-[50%] right-[40px] w-4 h-4 bg-project-border-3 rounded-full animate-pulse delay-500"></div>
          </div>

        </div>
      </div>
    </section >
  )
}

export default Hero 