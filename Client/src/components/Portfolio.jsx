import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

// ── Skill logos ──
import css       from "../assets/icons/css_old (2).svg";
import jsLogo    from "../assets/images/skills/Tech.png";
import html5     from "../assets/icons/html5.svg";
import reactLogo from "../assets/images/skills/Tech-1.png";
import mongoLogo from "../assets/images/skills/Tech-2.png";
import pgLogo    from "../assets/images/skills/Tech-3.png";
import ssql      from "../assets/icons/sql-server.svg";
import figmaLogo from "../assets/images/skills/Tech-4.png";
import framer    from "../assets/icons/framer.svg";
import canvaLogo from "../assets/images/skills/1656733637logo-canva-png 1.png";
import psLogo    from "../assets/images/skills/Photoshop-Logo-PNG-Isolated-HD 1.png";
import clipchamp from "../assets/icons/microsoft-clipchamp.svg";
import premiere  from "../assets/icons/premiere.svg";
import Capcut  from "../assets/images/skills/capcut.png";

// ── Project images ──
import solarImg    from "../assets/images/projects/SOLAR_POWER_2000x_a9b446ae-473a-4504-9de2-bf1b4f22d482_2000xG.gif";
import achieveImg  from "../assets/images/portrait/Realistic black suit 1.png";
import aiImg       from "../assets/images/projects/HEARTRATEMONTORGIF.gif";
import ai2Img      from "../assets/images/projects/AI2.jpg";
import frontEndImg from "../assets/icons/frontend-developer.gif";
import hardwareImg from "../assets/images/projects/Hardware Proto.gif";
import WEBFolio from "../assets/images/projects/WEBFolio.gif";
import mobileImg   from "../assets/images/projects/Mobile dev.png";
const skills = [
  {
    imgs: [
      { src: jsLogo,    name: "JavaScript" },
      { src: reactLogo, name: "React" },
      { src: css,       name: "CSS" },
      { src: html5,     name: "HTML5" },
    ],
    title: "Programming",
    desc: "These are some of the programming skills I have learnt.",
  },
  {
    imgs: [
      { src: mongoLogo, name: "MongoDB" },
      { src: ssql,      name: "SQL Server" },
    ],
    title: "Database Development",
    desc: "Here are some of the database skills I have learnt.",
  },
  {
    imgs: [
      { src: figmaLogo, name: "Figma" },
      { src: framer,    name: "Framer" },
    ],
    title: "Prototyping",
    desc: "These are some of the Prototyping skills I have learnt.",
    active: true,
  },
  {
    imgs: [
      { src: canvaLogo, name: "Canva" },
      { src: psLogo,    name: "Photoshop" },
      { src: premiere,  name: "Premiere" },
      { src: Capcut,  name: "Capcut" },
    ],
    title: "Editing",
    desc: "These are some of the Editing skills I have learnt.",
  },
];
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const projects = [
  {
    num: "01",
    title: "Solar Powered Vehicle",
    img: solarImg,
    desc: "Designed and built a solar-powered vehicle prototype capable of converting solar energy into motion. This project involved circuit design, energy storage systems, and mechanical engineering to create a sustainable transportation solution.",
  },
  {
    num: "02",
    title: "Business Portfolio Website",
    img: WEBFolio,
    desc: "Developed a full-stack web application for a business portfolio, showcasing projects and services with a modern, responsive design. The website was built using React for the front-end and Node.js for the back-end, with a focus on user experience and performance optimization.",
  },
  {
    num: "03",
    title: "Mobile App Development",
    img: mobileImg,
    desc: "Developed a cross-platform mobile application using React Native. The app features real-time data syncing, push notifications, and an intuitive UI."
  },
  {
    num: "04",
    title: "AI-Driven Heart-Rate Monitoring System",
    img: aiImg,
    desc: "Built an AI-powered health monitoring system that uses machine learning algorithms to analyse heart-rate data in real time. The system can detect anomalies and alert users of potential cardiac irregularities, integrating hardware sensors with a React dashboard.",
  },
];
 
const projectTags = [
  { label: "Front-End Development",    img: frontEndImg },
  { label: "Hardware Prototyping",     img: hardwareImg },
  { label: "Mobile App Development",   img: mobileImg },
  { label: "Artificial Intelligence",  img: [ai2Img ]}
];
 
const achievements = [
  {
    title: "First Full-Stack Application",
  desc: "Successfully built and deployed my first end-to-end web application connecting a React frontend to a live MongoDB database and Node.js back-end.",
  },
  {
    title: "Open Source Contributor",
    desc: "Pushed my first repositories to GitHub, documenting projects and building a public portfolio of work for potential employers."
  },
  {
    title: "Modern Dev Tooling",
    desc: "Worked with industry-standard tools including VS Code, MongoDB Atlas, GitHub and Figma throughout the development lifecycle."
  },
];
 
export default function Portfolio() {
  const [openProject, setOpenProject] = useState(1); // AI project open by default
 
  
  return (
    <section className="portfolio" id="portfolio">
      {/* ── Skills ── */}
      <div className="portfolio__section-label">Project Portfolio</div>
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
<h2 className="portfolio__heading">
        Skills &amp; Tech Stacks: The tools I've learnt <br />
        used in my{" "}
        <span className="portfolio__highlight">Development.</span>
      </h2>
</motion.div>
      
      
      <p className="portfolio__sub">What I offer</p>
 
      <div className="skills__grid">
        {skills.map((s, i) => (
          <div className="tool-card" key={i}>
            <div className="tool-card__visuals">
              <div className="tool-card__inner">
                <div className="tool-card__icon-track">
  {[...s.imgs, ...s.imgs, ...s.imgs].map((item, j) => (
    <div className="tool-card__icon-wrap" key={j}>
      <div className="tool-card__icon-circle">
        <img src={item.src} alt={item.name} className="tool-card__icon-img" />
      </div>
      <span className="tool-card__icon-name">{item.name}</span>
    </div>
  ))}
</div>
 
                {/* Scanner line */}
                <div className="tool-card__scanner" />
              </div>
            </div>
 
            <h4 className="tool-card__title">{s.title}</h4>
            <p className="tool-card__desc">{s.desc}</p>
          </div>
        ))}
      </div>
 
      {/* ── Projects ── */}
      <div className="portfolio__section-label" style={{ marginTop: "4rem" }}>
        My Projects
      </div>
<motion.div
  initial={{ scale: 0.9, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
>
      <h2 className="portfolio__heading">
        <span className="portfolio__highlight">Projects:</span> These are some
        of the Projects I <br />
        built While Studying {" "}
        <span className="portfolio__highlight">in Web development.</span>
      </h2>
</motion.div>


 
<div className="projects__list">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="project-item-wrap"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }} // replay on every scroll
        >
          <div
            className={`project-item ${
              openProject === i ? "project-item--open" : ""
            }`}
            onClick={() => setOpenProject(openProject === i ? null : i)}
          >
            <span className="project-item__num">{p.num}</span>
            <span className="project-item__title">{p.title}</span>
            <button className="project-item__arrow">
              {openProject === i ? "↑" : "→"}
            </button>
          </div>

          {/* Dropdown panel stays normal */}
          {openProject === i && (
            <motion.div
              className="project-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              {p.img && (
                <img
                  src={p.img}
                  alt={p.title}
                  className="project-panel__img"
                />
              )}
              <p className="project-panel__desc">{p.desc}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  
           
 
      <p className="projects__caption">
        Through these projects I was able to learn and integrate different
        systems in order to reach my long term objectives both as an individual
        and as a team member.
      </p>
 
      <div className="projects__tags">
        {projectTags.map((t, i) => (
          <div className="project-tag" key={i}>
            <img src={t.img} alt={t.label} className="project-tag__thumb" />
            <span>{t.label}</span>
          </div>
        ))}
      </div>
 
      {/* ── Achievements ── */}
      <div className="portfolio__section-label" style={{ marginTop: "5rem" }}>
        Achievements
      </div>
      <h2 className="portfolio__heading">
        <span className="portfolio__highlight">Achievements:</span> These are
        some of the I've <br />
        acquired as a{" "}
        <span className="portfolio__highlight">developer.</span>
      </h2>
 
      <div className="achievements__body">
        <div className="achievements__image">
          <img src={achieveImg} alt="Achievements" className="achievements__photo" />
        </div>
 
        <div className="achievements__list">
          <p className="portfolio__sub">Personal Achievements</p>
          {achievements.map((a, i) => (
            <div className="achievement-item" key={i}>
              <h4 className="achievement-item__title">{a.title}</h4>
              <p className="achievement-item__desc">{a.desc}</p>
            </div>
          ))}
          <a href="#contact" className="btn btn--outline">
            Tools I use &nbsp;→
          </a>
        </div>
      </div>
    </section>
  );
}