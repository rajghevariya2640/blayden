import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const AnimatedText = ({ text, textStyles, animationConfig }) => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!paragraphRef.current) return;

    const words = paragraphRef.current.querySelectorAll(".word");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    // Loop through each word and add animation
    words.forEach((word, index) => {
      tl.to(
        word,
        { color: "#F2F5FC", duration: 0.2 },
        index * 0.05
      );
    });

    // Cleanup ScrollTrigger instance when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={paragraphRef}
      style={{
        fontSize: textStyles?.fontSize || "68px",
        lineHeight: textStyles?.lineHeight || "1.4",
        color: textStyles?.color || "#414143",
        margin: textStyles?.margin || "163px 0 176px",
      }}
    >
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="word"
          style={{ display: "inline-block", marginRight: "16px" }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
