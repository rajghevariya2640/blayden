import { ArrowDownRight } from "@phosphor-icons/react";
import React from "react";
import Rock1 from "../../assets/image/png/banner-rock1.webp";
import Rock2 from "../../assets/image/png/banner-rock2.webp";
import BBox from "../../shared/BBox";
import BButton from "../../shared/BButton";
import BGrid from "../../shared/BGrid";
import BGridItem from "../../shared/BGridItem";
import BText from "../../shared/BText";

const Banner = () => {
  return (
    <BBox position="relative" minHeight="calc(100vh - 110px)" display='flex'>
      <BBox
        data-speed="0.6"
        className="bg1"
        position="absolute"
        css={{
          top: -606,
          right: 0,
          width: 860,
          height: 860,
        }}
      >
        <img src={Rock1} alt="rock" />
        <BBox
          css={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(20,20,20, 0) 78%, rgba(20,20,20, 1) 97%)",
          }}
        ></BBox>
      </BBox>
      <BBox
        data-speed="0.8"
        position="absolute"
        className="hgvhgvhgvghv"
        css={{
          bottom: "-118px",
          left: -175,
          width: 500,
          height: 500,
        }}
      >
        <img src={Rock2} alt="rock" />
        <BBox
          css={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              " linear-gradient(to bottom, rgba(20,20,20, 0) 78%, rgba(20,20,20, 1) 97%)",
          }}
        ></BBox>
      </BBox>

      <BGrid
        templateColumns="2fr 8fr 2fr"
        isPadding={true}
        position="relative"
        zIndex={10}
        marginTop='auto'
      >
        <BGridItem></BGridItem>
        <BGridItem>
          <BBox css={{display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'start', justifyContent: 'end'}}>
            <BBox
              css={{
                fontSize: 26,
                margin: "32px 0  41px",
                lineHeight: "1.24",
                "& span": { display: "block" },
              }}
            >
              <BText as="p">
                <span>Hello!</span> I am Raj Ghevariya
              </BText>
            </BBox>
            <BText as="h1" fontWeight={300} fontSize={160} lineHeight="1.2">
              Digital designer & illustrator
            </BText>
            <BButton css={{ margin: "101px 0 44px" }} variant="plain">
              Scroll for more <ArrowDownRight />
            </BButton>
          </BBox>
        </BGridItem>
        <BGridItem></BGridItem>
      </BGrid>
    </BBox>
  );
};

export default Banner;
