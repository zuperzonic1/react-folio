import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const TextAnimation = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const phrases = ["WEB DEVELOPER", "UI/UX DESIGNER", "CREATIVE CODER"];

  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    // Cursor Blink Effect
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    phrases.forEach((phrase) => {
      // Typing effect
      tl.to(textRef.current, { duration: 2, text: phrase, ease: "none" })
        // Wait a bit before erasing
        .to(textRef.current, { duration: 1, text: "", ease: "none", delay: 1 });
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">
        A <span ref={textRef}></span>
        <span ref={cursorRef} className="cursor">
          |
        </span>
      </h2>
      <style jsx>
        {`
          .cursor {
            font-weight: 100;
            color: #000;
            opacity: 1;
            animation: blink 1s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default TextAnimation;
