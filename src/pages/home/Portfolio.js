import React from "react";
import BGrid from "../../shared/BGrid";
import BGridItem from "../../shared/BGridItem";
import BStack from "../../shared/BStack";
import BText from "../../shared/BText";
import { DownCrossIcon } from "../../assets/image/svg/Icon";
import AnimatedText from "../../shared/AnimatedText";
import Image1 from "../../assets/image/png/portfolio1.webp";
import Image2 from "../../assets/image/png/slide2.webp";
import Image3 from "../../assets/image/png/portfolio3.webp";
import Image4 from "../../assets/image/png/portfolio4.webp";
import Image5 from "../../assets/image/png/portfolio5.webp";

const Portfolio = () => {
  return (
    <BGrid templateColumns="2fr 8fr 2fr">
      <BGridItem>
        <BStack
          flexDirection="row"
          alignItems="center"
          pl="50px"
          gap="10px"
          mt="26px"
        >
          <BText fontSize={26} lineHeight="1.6">
            Portfolio
          </BText>
          <DownCrossIcon />
        </BStack>
      </BGridItem>
      <BGridItem px="25px">
        <BStack maxWidth="94%" mb="58px">
          <AnimatedText
            text="Design, tech & some magic"
            textStyles={{
              fontSize: "140px",
              lineHeight: "1.2",
              color: "#333",
              margin: "0",
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
          <BText fontSize={26} lineHeight="1.6" maxWidth="780px" mt="69px">
            I wonder if I've been changed in the night? Let me think. Was I the
            same when I got up this morning? I almost think I can remember
            feeling a little different.
          </BText>
        </BStack>
        <BGrid
          templateColumns="6fr 6fr"
        >
          <BGridItem px="25px">
            <BStack borderRadius="20px" overflow="hidden"  mt="50px">
              <img src={Image1} alt="" />
            </BStack>
            <BStack borderRadius="20px" overflow="hidden" mt="50px">
              <img src={Image3} alt="" />
            </BStack>
            <BStack borderRadius="20px" overflow="hidden"  mt="50px">
              <img src={Image5} alt="" />
            </BStack>
          </BGridItem>
          <BGridItem px="25px">
            <BStack borderRadius="20px" overflow="hidden"  mt="50px">
              <img src={Image2} alt="" />
            </BStack>
            <BStack borderRadius="20px" overflow="hidden"  mt="50px">
              <img src={Image4} alt="" />
            </BStack>
            <BStack as="a" flex>
              <BText>Behance profile</BText>
            </BStack>
          </BGridItem>
        </BGrid>
      </BGridItem>
    </BGrid>
  );
};

export default Portfolio;
