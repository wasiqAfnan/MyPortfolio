import React from "react";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import rightImage from "../assets/undraw_developer-avatar_f6ac.svg";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToProjects = () => {
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "../assets/WasiqAfnanResume.pdf";
    link.download = "Wasiq-Afnan-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-hero-bg flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
          {/* Left side - Text and Buttons */}
          <div
            ref={ref}
            className={`space-y-8 transition-all duration-1000 w-full  mx-auto text-center ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4 ">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight text-center">
                <span className="block">Hi, I'm</span>
                <span className="block text-primary mt-1 whitespace-nowrap overflow-hidden text-ellipsis px-2">
                  <Typewriter
                    words={[
                      "Wasiq Afnan",
                      "Full Stack Developer",
                      "MERN Stack Developer",
                      "From India",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 font-inter">
                Full Stack Developer
              </p>
              <p className="text-xl text-gray-400 font-inter">
                I create beautiful, functional, and user-centered digital
                experiences that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          {/*
          <div
            ref={rightRef}
            className={`flex justify-center relative hidden md:flex transition-all duration-1000 ${rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            ...avatar and bubbles code...
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
