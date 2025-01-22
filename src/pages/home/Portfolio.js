import { Grid } from "@chakra-ui/react";
import { ArrowDownRight, ArrowRight } from "@phosphor-icons/react";
import React from "react";
import Image1 from "../../assets/image/png/portfolio1.webp";
import Image3 from "../../assets/image/png/portfolio3.webp";
import Image4 from "../../assets/image/png/portfolio4.webp";
import Image5 from "../../assets/image/png/portfolio5.webp";
import Image2 from "../../assets/image/png/slide2.webp";
import AnimatedText from "../../shared/AnimatedText";
import BGrid from "../../shared/BGrid";
import BGridItem from "../../shared/BGridItem";
import BStack from "../../shared/BStack";
import BText from "../../shared/BText";
import theme from "../../theme/Theme";

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
          <ArrowDownRight size={32} />
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
              wordDuration: 0.3,
              wordDelay: 0.07,
            }}
          />
          <BText
            fontSize={26}
            lineHeight="1.6"
            maxWidth="780px"
            mt="69px"
            className="animate"
          >
            I wonder if I've been changed in the night? Let me think. Was I the
            same when I got up this morning? I almost think I can remember
            feeling a little different.
          </BText>
        </BStack>
        <Grid
          templateColumns="6fr 6fr"
          css={{
            "& .chakra-stack": {
              borderRadius: 20,
              overflow: "hidden",
            },
          }}
        >
          <BGridItem
            px="25px"
            display="flex"
            flexDirection="column"
            gap="50px 0"
          >
            <BStack>
              <img src={Image1} alt="" />
            </BStack>
            <BStack>
              <img src={Image3} alt="" />
            </BStack>
            <BStack>
              <img src={Image5} alt="" />
            </BStack>
          </BGridItem>
          <BGridItem
            px="25px"
            display="flex"
            flexDirection="column"
            gap="50px 0"
          >
            <BStack>
              <img src={Image2} alt="" />
            </BStack>
            <BStack>
              <img src={Image4} alt="" />
            </BStack>
            <BStack as="a" flex="1" direction="row">
              <BStack
                as="a"
                href="#"
                direction="row"
                alignItems="center"
                mt="auto"
                ml="auto"
                gap="20px"
                transition="all 0.2s ease-in-out"
                _hover={{
                  color: theme.colors.gray.light[50],
                }}
              >
                <BText fontSize={26} fontWeight={500} lineHeight="1.23">
                  Behance profile
                </BText>
                <BStack
                  css={{
                    height: 100,
                    width: 100,
                    borderRadius: "50% !important",
                    border: "1px solid #fff",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease-in-out",
                    position: "relative",
                    "& svg": {
                      transition: "all 0.2s ease-in-out",
                      color: theme.colors.white
                    },
                  }}
                  _after={{
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 0,
                    height: 0,
                    transition: "all 0.2s ease-in-out",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    zIndex: -1,
                  }}
                  _hover={{
                    borderColor: "transparent",
                    "&::after": {
                      height: "100%",
                      width: "100%",
                    },
                    "& svg": {
                      transform: "rotate(-45deg)",
                      color: theme.colors.black,
                    },
                  }}
                >
                  <ArrowRight size={32} />
                </BStack>
              </BStack>
            </BStack>
          </BGridItem>
        </Grid>
      </BGridItem>
    </BGrid>
  );
};

export default Portfolio;
