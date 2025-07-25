import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const watchedValues = watch(); // watches all fields

  // Sync watched values with formData
  useEffect(() => {
    setFormData({
      name: watchedValues.name || "",
      email: watchedValues.email || "",
      message: watchedValues.message || "",
    });
  }, [watchedValues.name, watchedValues.email, watchedValues.message]);

  const onSubmit = async (formData) => {
    // e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    reset();
    setIsSubmitting(false);

    // Show success message
    toast.success("Message sent successfully!");

    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-about-bg">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold text-white mb-4">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div
          ref={ref}
          className={`max-w-2xl mx-auto transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Contact Form */}
          <div className="card bg-gray-900 shadow-xl border border-base-300">
            <div className="card-body">
              <h3 className="card-title text-white font-poppins font-semibold mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-inter">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    className="input input-bordered bg-base-200 text-white placeholder-gray-400 focus:input-primary transition-all duration-300"
                  />
                  {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-inter">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="input input-bordered bg-base-200 text-white placeholder-gray-400 focus:input-primary transition-all duration-300"
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white font-inter">
                      Message
                    </span>
                  </label>
                  <textarea
                    {...register("message")}
                    placeholder="Your Message"
                    className="textarea textarea-bordered bg-base-200 text-white placeholder-gray-400 focus:textarea-primary transition-all duration-300 h-32"
                  ></textarea>
                </div>

                <div className="form-control mt-8">
                  <button
                    type="submit"
                    className={`btn btn-primary btn-lg text-white font-poppins font-semibold transform transition-all duration-300 ${
                      isSubmitting
                        ? "loading"
                        : "hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
                    }`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center mt-8">
            <p className="text-gray-400 font-inter mb-4">
              Or connect with me on
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/wasiqafnan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-primary hover:scale-110 transition-transform duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/wasiq-afnan-ansari-cs2021/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-primary hover:scale-110 transition-transform duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/afnan.ansari.906/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-outline btn-primary hover:scale-110 transition-transform duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.494v-9.294H9.691v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
