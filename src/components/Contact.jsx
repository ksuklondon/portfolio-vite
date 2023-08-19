/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import Section from "./common/Section";
import { gsap } from "gsap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitter.com",
      icon: <FaTwitter />,
    },
    {
      id: 2,
      link: "https://facebook.com",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/kalina-staniszewska-8559a7280/",
      icon: <FaLinkedin />,
    },
  ];

  const ref = useRef(null);
  useEffect(() => {
    gsap.from(ref.current, {
      duration: 10,
      opacity: 0,
      repeat: 2,
    });
  }, []);

  return (
    <Section
      title="Contact 📬"
      subtitle="These are the ways you can get in touch with me. Hope to hear from you soon :)"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center text-slate-200">
        <div>
          <p className="max-w-xs md:max-w-lg text-slate-200 font-extralight">
            Feel free to contact me. Submit the form below or shoot me an email
            - staniszewskakalina@gmail.com
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 ease-in-out hover:text-slate-950"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* bottom form */}
        <div className="p-8 text-left w-full flex items-center justify-center">
          <form
            action="https://getform.io/f/0e152941-8b80-43ae-9a98-4961ec3c2fe4"
            method="POST"
            className="w-full"
          >
            <div className="w-full">
              <div className="felx flex-col">
                <label className="capitalize text-slate-200 text-sm py-2 font-extralight">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border-2 rounded-lg text-black p-3 flex focus:outline-none border-gray-400"
                />
              </div>

              <div className="felx flex-col my-2">
                <label className="capitalize text-slate-200 text-sm py-2 font-extralight">
                  phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 text-black"
                />
              </div>

              <div className="felx flex-col my-2">
                <label className="capitalize text-slate-200 text-sm py-2 font-extralight">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  className="w-full border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 text-black"
                />
              </div>

              <div className="felx flex-col">
                <label className="capitalize text-slate-200 text-sm py-2 font-extralight">
                  message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="w-full border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 text-black resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-bl from-amber-200 via-black to-white text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
