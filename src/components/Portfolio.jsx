import Section from "./common/Section";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "../assets/port1.png";
import p2 from "../assets/port2.png";
import p3 from "../assets/port3.png";
import p4 from "../assets/port4.png";
import p5 from "../assets/port5.png";
import p6 from "../assets/port6.png";
import p7 from "../assets/port7.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "Restaurant Menu",
      github: "https://github.com/ksuklondon/menu-app",
      demo: "https://my-menu-app-a93ba170f0c1.herokuapp.com/",
    },
    {
      id: 2,
      image: p2,
      title: "Poland Tours and Trips",
      github: "https://github.com/ksuklondon/explore-poland-app",
      demo: "https://explore-poland-app-04b5ed99df85.herokuapp.com/",
    },
    {
      id: 3,
      image: p3,
      title: "Online Pet Store E-commerce Project",
      github: "https://github.com/ksuklondon/yall-store",
      demo: "https://yall-store.netlify.app/",
    },
    {
      id: 4,
      image: p4,
      title: "Cake Recipe App",
      github: "https://github.com/ksuklondon/cakes-app",
      demo: "https://my-cakes-app-f7d1431ded8f.herokuapp.com/",
    },
    {
      id: 5,
      image: p5,
      title: "Employees Slider",
      github: "https://github.com/ksuklondon/employee-slider-app",
      demo: "https://employee-slider-app-dd7f31713ffe.herokuapp.com/",
    },
    {
      id: 6,
      image: p6,
      title: "New Developments in Costa Blanca",
      github: "https://github.com/ksuklondon/spain-developments",
      demo: "https://main--spectacular-marigold-6cff68.netlify.app/",
    },
    {
      id: 7,
      image: p7,
      title: "Meetings App",
      github: "https://github.com/ksuklondon/meetings-app",
      demo: "https://meetings-app-17cb92ac90b8.herokuapp.com/",
    },
  ];

  return (
    <Section title="Portfolio 📖" subtitle="Check out some of my projects.">
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1 text-slate-200">
              <h2>{title}</h2>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
