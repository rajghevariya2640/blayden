import React from "react";
import Image from "../../assets/image/png/banner-bottom.webp";
import AnimatedText from "../../shared/AnimatedText";
import BBox from "../../shared/BBox";
import BGrid from "../../shared/BGrid";
import BGridItem from "../../shared/BGridItem";

const BannerBottom = () => {
  return (
    <BBox>
      <BGrid templateColumns="2fr 8fr 2fr" isPadding={true} position="relative">
        <BGridItem></BGridItem>
        <BGridItem>
          <BBox
            css={{
              maxHeight: "700px",
              borderRadius: "32px",
              overflow: "hidden",
              "& img": { height: "100%" },
            }}
          >
            <img src={Image} alt="banner bottom" />
          </BBox>
          {/* <BText
            ref={paragraphRef}
            css={{ fontSize: {xs:"16px", xl:"68px"}, lineHeight: "1.4", color: "#414143", margin: '163px 0 176px' }}
          >
            {`Here we must run as fast as we can, just to stay in place. And if you wish to go anywhere you must run twice as fast as that.`
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className="word"
                  style={{ display: "inline-block", marginRight: "16px" }}
                >
                  {word}
                </span>
              ))}
          </BText> */}
           <AnimatedText
        text="Here we must run as fast as we can, just to stay in place. And if you wish to go anywhere you must run twice as fast as that."
        textStyles={{
          fontSize: "68px",
          lineHeight: "1.4",
          color: "#333",
          margin: "100px 0",
        }}
        animationConfig={{
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
          wordColor: "#FF5733",
          wordDuration: 0.3,
          wordDelay: 0.07,
        }}
      />
        </BGridItem>
        <BGridItem></BGridItem>
      </BGrid>
    </BBox>
  );
};

export default BannerBottom;
