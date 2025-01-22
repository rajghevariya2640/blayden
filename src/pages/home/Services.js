import { ArrowDownRight, BezierCurve, Code, Cube, Graph } from "@phosphor-icons/react";
import React from "react";
import AnimatedText from "../../shared/AnimatedText";
import BGrid from "../../shared/BGrid";
import BGridItem from "../../shared/BGridItem";
import BStack from "../../shared/BStack";
import BText from "../../shared/BText";
import theme from "../../theme/Theme";
import Service1 from "../../assets/image/png/service1.webp";
import Service2 from "../../assets/image/png/service2.webp";
import Service3 from "../../assets/image/png/service3.webp";
import Service4 from "../../assets/image/png/service4.webp";

const service = [
  {
    head: "Digital art and graphic design",
    description:
      "I use Adobe Photoshop, Fresco and Blender to create illustrations and 3D renders for my clients and stocks.",
    src: Service1,
    icon: <BezierCurve size={54} weight="thin" />,
  },
  {
    head: "Frontend development",
    description: "I work with HTML/CSS, Framer and WordPress.",
    src: Service2,
    icon: <Code size={54} weight="thin" />
  },
  {
    head: "Brand identity",
    description:
      "I help my clients to develop a personality and brand voice, design the brand look and logo.",
    src: Service3,
    icon: <Cube size={54} weight="thin" />,
  },
  {
    head: "SEO/Digital marketing solutions",
    description:
      "Social media content plans, media monitoring, email and text messaging and search engine optimization.",
    src: Service4,
    icon: <Graph size={54} weight="thin" />,
  },
];

const Services = () => {
  return (
    <BStack pt={265}>
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
              Sevices
            </BText>
            <ArrowDownRight size={32} />
          </BStack>
        </BGridItem>
        <BGridItem px="25px">
          <BStack
            mb="58px"
            css={{
              "& > div > span:first-of-type": {
                width: "100%",
              },
            }}
          >
            <AnimatedText
              text="Creating impactful projects"
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
                wordDuration: 0.3,
                wordDelay: 0.07,
              }}
            />
          </BStack>
          <BText fontSize={26} lineHeight="1.6" maxWidth={780}>
            I wonder if I've been changed in the night? Let me think. Was I the
            same when I got up this morning? I almost think I can remember
            feeling a little different.
          </BText>
          <BStack mt={110}>
            {service?.map((data, index) => {
              return (
                <BStack
                  key={index}
                  direction="row"
                  css={{
                    height: 650,
                    border: `1px solid ${theme.colors.gray.light[100]}`,
                    padding: "40px 50px",
                    borderRadius: 20,
                    overflow: "hidden",
                    marginBottom: 50,
                    position: "sticky",
                    top: 133,
                    backgroundColor: theme.colors.dark[50],
                  }}
                >
                  <BGrid templateColumns="6fr 6fr">
                    <BGridItem height="100%">
                      <BStack justifyContent="space-between" height="100%">
                        <BText as="h3" fontSize={64} lineHeight="1.21">{data?.head}</BText>
                        <BStack>
                          {data?.icon}
                          <BText fontSize={26} lineHeight="1.6" maxWidth="87%">{data?.description}</BText>
                        </BStack>
                      </BStack>
                    </BGridItem>
                    <BStack
                      css={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        maxWidth: "515px",
                      }}
                    >
                      <img src={data?.src} alt="" />
                    </BStack>
                  </BGrid>
                </BStack>
              );
            })}
          </BStack>
        </BGridItem>
      </BGrid>
    </BStack>
  );
};

export default Services;
