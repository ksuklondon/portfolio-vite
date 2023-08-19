/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from "react-icons/fa";
import profile from "../assets/profile1.png";

const Hero = () => {
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

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  useEffect(() => {
    const text = new SplitType("#target");
    gsap.from(text.chars, {
      y: "100%",
      opacity: 0,
      // scale: 0,
      stagger: 0.1,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      repeat: 2,
      repeatDelay: 5,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="effect text-5xl text-stone-100 uppercase font-bold sm:row-span-2">
        Kalina Staniszewska
      </h2>
      <h3 className="py-3 text-2xl text-stone-100">Web Developer</h3>
      <p id="target" className="max-w-xl font-light text-slate-50">
        Hello <span className="animate-pulse text-4xl">👋🖖</span>, welcome to
        my site. I'm a self-taught Full-Stack Web Developer based in London,
        although I consider myself a world's citizen. I'm deeply passionate
        about web development and creating beautiful and functional web
        applications! My favourite part of programming is the problem-solving
        aspect. I love the feeling of finally figuring out a solution to a
        problem. When I don't code, I read books, travel, play with my dog Berry
        or learn languages.
      </p>

      {/* social icons */}
      <div className="flex justify-evenly text-slate-200 py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-zinc-950"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* avatar and resume */}
      <div>
        <img
          src={profile}
          alt="profile"
          className="w-60 h-60 md:w-72 md:h-72 object-contain object-center rounded-xl pt-5"
        />
      </div>

      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-stone-50 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
