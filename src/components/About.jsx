import React from "react";
import { useInView } from "react-intersection-observer";
import myImg from "../assets/MyImg.png";

const About = () => {
  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-about-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left side - Avatar */}
          <div
            ref={leftRef}
            className={`flex justify-center lg:justify-start transition-all duration-1000 ${
              leftInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">W</span>
                    </div>
                    <p className="text-white font-poppins font-semibold">Wasiq</p>
                    <p className="text-gray-400 text-sm">Full Stack Developer</p>
                  </div>
                </div>
              </div>/*}
              {/* Floating elements around avatar */}
            {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-project-border-1 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-project-border-2 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-project-border-3 rounded-full animate-pulse delay-500"></div>
            </div>  */}

            {/* My image on the left side  */}
            <div className="avatar p-1 bg-gradient-to-br from-slate-500 to-slate-300 rounded-xl max-w-xs w-full mx-auto">
              <div className="w-full max-w-xs h-[400px] sm:h-[200px] md:h-[450px] ring-4 ring-slate-300 ring-offset-base-100 ring-offset-2 overflow-hidden shadow-2xl rounded-xl">
                <img
                  src={myImg}
                  alt="Wasiq Afnan Ansari"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right side - Bio */}
          <div
            ref={rightRef}
            className={`space-y-6 transition-all duration-1000 ${
              rightInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-poppins font-semibold text-white">
              Passionate Developer with a Creative Mind
            </h3>

            <div className="space-y-4 text-gray-300 font-inter leading-relaxed">
              <p>
                I'm a passionate full-stack developer, building efficient and
                visually appealing web applications. What began as a simple
                interest in how websites work has grown into a full-fledged
                commitment to crafting seamless digital experiences.
              </p>

              <p>
                I specialize in modern web technologies including React,
                Node.js, and MongoDB. My approach focuses on writing clean,
                maintainable code while staying up-to-date with the latest
                industry trends and best practices to ensure every solution is
                both robust and user-friendly.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies,
                Planning for any new projects, or sharing knowledge with the
                developer community. I believe in continuous learning and
                pushing the boundaries of what's possible in web development.
                I'm a firm believer in lifelong learning and always strive to
                improve both technically and creatively.
              </p>
            </div>

            {/* Skills */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
