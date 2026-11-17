import { useState } from "react";
import portrait from "../assets/images/portrait/portrait-handsome-black-man-blue_236854-40343.jpg";
import { motion } from "framer-motion";

function About() {
  const stats = [
    {
      value: "4+",
      label: "Core Skill Areas",
      detail:
        "Programming, Database Development, Prototyping & Editing — a well-rounded foundation across the full stack.",
    },
    {
      value: "6+",
      label: "Tools & Technologies",
      detail:
        "React, JavaScript, MongoDB, PostgreSQL, Figma, Canva & Photoshop — tools I use daily to design and build.",
    },
    {
      value: "4",
      label: "Featured Projects",
      detail:
        "From a Solar Powered Vehicle to an AI-Driven Heart-Rate Monitor — hands-on projects spanning hardware, AI and mobile development.",
    },
    {
      value: "100%",
      label: "Growth Mindset",
      detail:
        "Always learning — every project is an opportunity to pick up a new tool, refine my process and grow as a developer.",
    },
  ];

  // duplicate the list so the scroll loop looks seamless
  const loopStats = [...stats, ...stats];

  return (
    <section className="about" id="about">
      <div className="about__intro-label">Who am I?</div>
      
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="about__heading">
        A CREATIVE DEVELOPER FOCUSED ON CLEAN DESIGN, <br />
        PRACTICAL SOLUTIONS AND CONTINUOUS GROWTH.
      </h2>
</motion.div>


      <div className="about__body">
        
        <div className="about__image-wrap">
          <div className="about__image-placeholder">
            <motion.img
            src={portrait} alt="Portrait of Ofentse" className="about__photo"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: false }}
            />           
            
          </div>
        </div>




        <div className="about__text">
          <motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  <div className="about__text">
<h3 className="about__text-heading">
            I enjoy turning ideas into simple, useful digital experiences.
          </h3>
          </div>
</motion.div>
          <p>
            I am a developing web designer and front-end developer with an
            interest in building modern portfolio pages, responsive interfaces
            and user-friendly digital products.
          </p>
          <p>
            My current skill set includes React, JavaScript, prototyping,
            database fundamentals, content editing and basic hardware project
            development. I focus on writing readable code and presenting work in
            a way that is clear, organised and professional.
          </p>
          <p>
            I am still growing as a developer, but I enjoy learning new tools,
            working with teams and improving every project from the first idea
            to the final presentation.
          </p>
          <a href="#portfolio" className="btn btn--outline">
            View My Work &nbsp;→
          </a>
        </div>
      </div>

      {/* ── Scrolling flip-card stats ── */}
      <div className="stats-marquee">
        <div className="stats-marquee__track">
          {loopStats.map((s, i) => (
            <div className="flip-card" key={i}>
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <span className="flip-card__value">{s.value}</span>
                  <span className="flip-card__label">{s.label}</span>
                </div>
                <div className="flip-card__back">
                  <p>{s.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;