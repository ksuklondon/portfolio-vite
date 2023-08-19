import Section from "./common/Section";
import html1 from "../assets/html.png";
import css1 from "../assets/css.png";
import javascript1 from "../assets/javascript.png";
import react1 from "../assets/react.png";
import python1 from "../assets/python.png";
import github1 from "../assets/github.png";
import node1 from "../assets/node.png";
import mongo1 from "../assets/mongo.png";
import sql1 from "../assets/sql.png";
import tailwind1 from "../assets/tailwind.png";
import bootstrap1 from "../assets/bootstrap.png";
import numpy1 from "../assets/numpy.png";
import pandas1 from "../assets/pandas.png";
import tableau1 from "../assets/tableau.png";
import django1 from "../assets/django.png";
import flask1 from "../assets/flask.png";
import bulma1 from "../assets/bulma.png";
import contentful1 from "../assets/contentful.png";
import figma1 from "../assets/figma.png";
import sanity1 from "../assets/sanity.png";
import greensock1 from "../assets/greensock1.png";
import framer1 from "../assets/framer.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      image: html1,
      title: "HTML5",
    },
    {
      id: 2,
      image: css1,
      title: "CSS",
    },
    {
      id: 3,
      image: javascript1,
      title: "JavaScript",
    },
    {
      id: 4,
      image: react1,
      title: "React JS",
    },
    {
      id: 5,
      image: python1,
      title: "Python",
    },
    {
      id: 6,
      image: github1,
      title: "GitHub",
    },
    {
      id: 7,
      image: node1,
      title: "Node JS",
    },
    {
      id: 8,
      image: mongo1,
      title: "Mongo DB",
    },
    {
      id: 9,
      image: sql1,
      title: "SQL",
    },
    {
      id: 10,
      image: tailwind1,
      title: "Tailwind CSS",
    },
    {
      id: 11,
      image: bootstrap1,
      title: "Bootstrap",
    },
    {
      id: 12,
      image: numpy1,
      title: "NumPy",
    },
    {
      id: 13,
      image: pandas1,
      title: "Pandas",
    },
    {
      id: 14,
      image: tableau1,
      title: "Tableau",
    },
    {
      id: 15,
      image: django1,
      title: "Django",
    },
    {
      id: 16,
      image: flask1,
      title: "Flask",
    },
    {
      id: 17,
      image: bulma1,
      title: "Bulma",
    },
    {
      id: 18,
      image: contentful1,
      title: "Contentful",
    },
    {
      id: 19,
      image: figma1,
      title: "Figma",
    },
    {
      id: 20,
      image: sanity1,
      title: "Sanity",
    },
    {
      id: 21,
      image: greensock1,
      title: "GreenSock",
    },
    {
      id: 22,
      image: framer1,
      title: "Framer Motion",
    },
  ];

  return (
    <div>
      <Section
        title="Experience 🛠"
        subtitle="These are the technologies I've worked with"
      />
      {/* justify-items-center */}
      <div className="flex items-center justify-center h-auto w-auto -mt-10 mb-6">
        <div className="grid grid-cols-4 place-items-center m-2 shadow-lg shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-125">
          {technologies.map(({ id, image, title }) => (
            <div key={id} className="grid place-items-center mb-2.5">
              <img
                src={image}
                alt={title}
                className="w-7 h-7 md:w-10 md:h-10 object-contain"
              />
              <h3 className="mt-1 text-base text-stone-100">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
