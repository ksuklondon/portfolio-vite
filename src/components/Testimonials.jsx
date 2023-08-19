/* eslint-disable react/prop-types */
/* eslint-disable */
import { useEffect, useRef } from "react";
// import {
//   AnimatePresence,
//   motion,
//   useAnimation,
//   useInView,
// } from "framer-motion/dist/framer-motion";

import { motion, useAnimation, useInView } from "framer-motion";
import Section from "./common/Section";
import avatarm1 from "../assets/avatarm1.jpg";
import avatarm3 from "../assets/avatarm3.jpg";
import avatarw1 from "../assets/avatarw1.jpg";
import Reveal from "./common/Reveal";

const Testimonials = ({ id, image, name, comment }) => {
  const TESTIMONIALS = [
    {
      id: 1,
      image: avatarm3,
      name: "Marc",
      comment:
        "Working with Kalina was an absolute pleasure. Her coding skills and attention to detail brought our project to life.",
    },
    {
      id: 2,
      image: avatarw1,
      name: "Veronica",
      comment:
        "Working with Kalina on our mutual project was a fantastic experience. Kalina's coding expertise and commitment to delivering high-quality results were evident from day one.",
    },
    {
      id: 3,
      image: avatarm1,
      name: "Kamran",
      comment:
        "I've had the pleasure of supervising Kalina. Her ability to work independently and as part of a team made a significant impact on our projects.",
    },
  ];

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <Section title="Testimonials 📣" subtitle="People said">
          <div className="max-w-xl flex flex-col gap-8 text-stone-50 ">
            {TESTIMONIALS.map(({ id, image, name, comment }) => (
              <div className="flex p-4 justify-center items-center rounded-xl shadow-md shadow-gray-200">
                <div className="w-1/3">
                  <Reveal>
                    <img
                      key={id}
                      src={image}
                      alt={name}
                      className="w-20 h-20 object-cover object-top pt-2"
                    />
                  </Reveal>
                </div>

                <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
                  <Reveal width="100%">
                    <h3 className="text-xl font-semibold">{name}</h3>
                  </Reveal>
                  <Reveal>
                    <p className="text-sm font-extralight">{comment}</p>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </motion.div>
    </>
  );
};

export default Testimonials;
