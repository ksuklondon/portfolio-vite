import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Exit = () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#slide",
      // pin: true,
      start: "top top",
      ease: "slow.in",
      duration: 10,
      repeat: -1,
    },
  });

  useEffect(() => {
    tl.from("#slide", {
      ease: "slow.in",
      scale: 0.5,
      duration: 5,
      repeat: -1,
      // delay: 6,
      // stagger: 3,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    tl.to("#emoji", {
      rotate: 360,
      scale: 1,
      duration: 6,
      repeat: -1,
      // delay: 6,
      // yoyo: true,
      // stagger: 4,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  tl.repeat(-1);

  return (
    <div className="flex items-center justify-center">
      <div
        id="slide"
        className="text-stone-100 text-4xl flex items-center
        justify-center"
      >
        Thank you for visiting my website{" "}
        <span id="emoji" className="px-4">
          😊
        </span>
      </div>
    </div>
  );
};

export default Exit;
