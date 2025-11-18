import React from "react";

const About = () => {
  return (
    <div className={` h-full w-full    `}>
      {/* ABOUT SECTION */}
      <section className="w-full  py-10 font2">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 font3">About Me</h2>

          <p className="leading-7 opacity-90 mb-6 font2">
  I am <strong>Abubakar Afzal</strong>, a passionate <strong>Frontend Web Developer</strong> dedicated to creating clean, responsive, and visually appealing websites. With a strong foundation in React, Tailwind CSS, GSAP, and Framer Motion, I specialize in transforming design concepts into functional, interactive web experiences. I believe that simplicity, accessibility, and smooth animations are key to engaging user interfaces, and I strive to implement these principles in every project I work on.
</p>

<p className="leading-7 opacity-90 mb-6 font2">
  Currently, I am pursuing my studies at <strong>Islamia University, Bahawalnagar Campus</strong> with a CGPA of <strong>3.78</strong>, while also expanding my skills in backend development, including APIs, databases, and authentication. My goal is to evolve into a full-stack developer capable of delivering complete web solutions, combining my frontend expertise with server-side knowledge. I am enthusiastic about collaborating on projects that challenge me to grow and deliver exceptional web experiences.
</p>

          <h3 className="text-2xl font-semibold mb-2 font3">Education</h3>
          <p className="opacity-90 leading-7 mb-6">
            Studying at <strong>Islamia University, Bahawalnagar Campus</strong>{" "}
            — CGPA: <strong>3.78</strong>
          </p>

          <h3 className="text-2xl font-semibold mb-2 font3">Skills</h3>
          <ul className="list-disc ml-6 space-y-1 opacity-90 mb-6">
            <li>JavaScript, HTML, CSS</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
            <li>Project Deployment</li>
            <li>GSAP Animations</li>
            <li>Framer Motion</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-2 font3">
            Currently Learning
          </h3>
          <p className="opacity-90 leading-7">
            Backend development (APIs, Databases & Authentication) to move
            toward full-stack development.
          </p>
        </div>
      </section>

      {/* BANNER SECTION */}
      <section className="w-full  py-12 border-y font2">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold font3">
            Let’s Build Something Great
          </h3>
          <p className="mt-2 opacity-80">
            I create modern & clean UI websites with animations.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="w-full  py-16 font2">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 font3">Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <h4 className="font-semibold font3">Frontend Development</h4>
              <p className="text-sm mt-2 opacity-80">
                Custom-coded responsive websites.
              </p>
            </div>

            <div className="p-4 border rounded">
              <h4 className="font-semibold font3">UI Animations</h4>
              <p className="text-sm mt-2 opacity-80">
                GSAP & Framer Motion smooth interactions.
              </p>
            </div>

            <div className="p-4 border rounded">
              <h4 className="font-semibold font3">Modern UI Design</h4>
              <p className="text-sm mt-2 opacity-80">
                Simple, minimal & fast UI layouts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
