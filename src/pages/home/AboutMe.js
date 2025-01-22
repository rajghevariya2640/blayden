import { ArrowDownRight } from "@phosphor-icons/react";
import React from "react";
import Potrait from "../../assets/image/png/aboutMe.webp";
import AnimatedText from "../../shared/AnimatedText";
import BButton from "../../shared/BButton";
import BGrid from "../../shared/BGrid";
import BGridItem from "../../shared/BGridItem";
import BList from "../../shared/BList";
import BListItem from "../../shared/BListItem";
import BStack from "../../shared/BStack";
import BText from "../../shared/BText";
import theme from "../../theme/Theme";

const AboutMe = () => {
  return (
    <BStack pt={210}>
      <BGrid templateColumns="2fr 8fr 2fr" isPadding={true}>
        <BGridItem>
          <BStack flexDirection="row" alignItems="center" gap="10px" mt="26px">
            <BText fontSize={26} lineHeight="1.6">
              About me
            </BText>
            <ArrowDownRight size={32} />
          </BStack>
        </BGridItem>
        <BGridItem px="25px">
          <BStack maxWidth="94%" mb="58px">
            <AnimatedText
              text="Approach and philosophy"
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
          <BStack
            css={{
              maxHeight: 700,
              borderRadius: 20,
              overflow: "hidden",
              marginTop: "85px",
            }}
          >
            <img src={Potrait} alt="" />
          </BStack>
          <BGrid templateColumns="9fr 3fr" mt="104px" gap="50px">
            <BGridItem>
              <BText fontSize="26px" lineHeight="1.6">
                I wonder if I've been changed in the night? Let me think. Was I
                the same when I got up this morning? I almost think I can
                remember feeling a little different. But if I'm not the same,
                the next question is 'Who in the world am I?' Ah, that's the
                great puzzle!
              </BText>
              <BButton
                variant="outline"
                css={{
                  padding: "36px 76px",
                  fontSize: 26,
                  fontWeight: 500,
                  borderRadius: 200,
                  borderColor: theme.colors.white,
                  color: theme.colors.main,
                  marginTop: 47,
                }}
                _after={{
                  content: "''",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  height: 0,
                  width: 0,
                  backgroundColor: theme.colors.white,
                  borderRadius: 200,
                  zIndex: -1,
                  transition: "all 0.2s ease-in-out",
                }}
                _hover={{
                  color: theme.colors.black,
                  "&::after": {
                    height: "100%",
                    width: "100%",
                  },
                }}
              >
                Download CV
              </BButton>
            </BGridItem>
            <BGridItem>
              <BList
                css={{
                  "& .chakra-list__item": {
                    fontSize: 26,
                    lineHeight: "1.23",
                    marginBottom: "32px",
                    "&:last-of-type": {
                      marginjBottom: 0,
                    },
                  },
                }}
              >
                <BListItem>Raj Ghevariya</BListItem>
                <BListItem>+91 8200729165</BListItem>
                <BListItem>rajghevariya40@gmail.com</BListItem>
                <BListItem>Surat, Gujarat.</BListItem>
              </BList>
            </BGridItem>
          </BGrid>
        </BGridItem>
      </BGrid>
    </BStack>
  );
};

export default AboutMe;
