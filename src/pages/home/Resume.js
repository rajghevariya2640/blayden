import React from "react";
import AnimatedText from "../../shared/AnimatedText";
import BStack from "../../shared/BStack";
import BGridItem from "../../shared/BGridItem";
import { ArrowDownRight } from "@phosphor-icons/react";
import BText from "../../shared/BText";
import BGrid from "../../shared/BGrid";
import { Table } from "@chakra-ui/react";
import theme from "../../theme/Theme";
import { FigmaIcon, IllustratorIcon, PhotoShopIcon, SketchIcon } from "../../assets/image/svg/Icon";

const education = [
  {
    year: "2015 - 2016",
    name: "Drawing Concentration",
    award: "New York Academy of Art",
    description:
      "Intensive drawing courses that present the fundamental principles of drawing.",
  },
  {
    year: "2019 - 2021",
    name: "UI/UX Design Specialization",
    award: "California Institute of Arts",
    description:
      "Research, design, and prototype effective, visually-driven websites and apps.",
  },
  {
    year: "2022",
    name: "UI/UX Designer",
    award: "Coursera",
    description:
      "This cource is about how to complete the design process from beginning to end.",
  },
];

const experence = [
  {
    year: "2018 - 2019",
    name: "Illustrator",
    award: (
      <>
        in the
        <BText as="a" gref="#">
          Creative Mind
        </BText>
        agency
      </>
    ),
    description:
      "I created original images for a range of digital and printed products.",
  },
  {
    year: "2019 - 2021",
    name: "Graphic designer",
    award: (
      <>
        in the{" "}
        <BText as="a" href="#">
          Moon Light
        </BText>{" "}
        agency
      </>
    ),
    description:
      "My job was to create adverts, branding, signage and other media products.",
  },
  {
    year: "2021 - now",
    name: "UI/UX Designer",
    award: (
      <>
        in the{" "}
        <BText as="a" href="#">
          Moon Light
        </BText>{" "}
        agency
      </>
    ),
    description:
      "I am actively involved in creating user interfaces for mobile apps and websites.",
  },
];

const tools = [
  {
    icon: <PhotoShopIcon />,
    label: "Photoshop",
  },
  {
    icon: <FigmaIcon />,
    label: "Figma",
  },
  {
    icon: <IllustratorIcon />,
    label: "Illustrator",
  },
  {
    icon: <SketchIcon />,
    label: "Sketch",
  },
  {
    icon: <PhotoShopIcon />,
    label: "Blender",
  },
  {
    icon: <PhotoShopIcon />,
    label: "HTML5",
  },
  {
    icon: <PhotoShopIcon />,
    label: "CSS3",
  },
  {
    icon: <PhotoShopIcon />,
    label: "Notion",
  },
];

const Resume = () => {
  return (
    <BStack pt={265}>
      <BGrid templateColumns="2fr 8fr 2fr" isPadding={true}>
        <BGridItem>
          <BStack flexDirection="row" alignItems="center" gap="10px" mt="26px">
            <BText fontSize={26} lineHeight="1.6">
              Resume
            </BText>
            <ArrowDownRight size={32} />
          </BStack>
        </BGridItem>
        <BGridItem>
          <BStack mb="73px" maxWidth="80%">
            <AnimatedText
              text="The digital journey"
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
          <BText fontSize={26} lineHeight="1.23" fontWeight={500} mb={113}>
            [ My education ]
          </BText>
          <Table.Root
            css={{
              "& .chakra-table__row": {
                backgroundColor: "transparent",
                borderTop: `1px solid ${theme.colors.gray.light[100]}`,
                "&:last-of-type": {
                  borderBottom: `1px solid ${theme.colors.gray.light[100]}`,
                },
              },
              "& .chakra-table__cell": {
                fontSize: 26,
                lineHeight: "1.6",
                padding: "50px 0",
                border: 0,
                verticalAlign: "top",
              },
            }}
          >
            <Table.Body>
              {education?.map((data, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell width="16.5%">{data?.year}</Table.Cell>
                    <Table.Cell width="41.75%">
                      <BStack>
                        <BText
                          fontSize={36}
                          lineHeight="1.2"
                          fontWeight={500}
                          mb="6px"
                        >
                          {data?.name}
                        </BText>
                        <BText
                          as="a"
                          href="#"
                          fontSize={18}
                          textDecoration="underline"
                          _hover={{ color: theme.colors.gray.light[50] }}
                          width="fit-content"
                        >
                          {data?.award}
                        </BText>
                      </BStack>
                    </Table.Cell>
                    <Table.Cell width="41.75%">
                      <BText>{data?.description}</BText>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>
          <BText fontSize={26} lineHeight="1.23" fontWeight={500} my={113}>
            [ Work experience ]
          </BText>
          <Table.Root
            css={{
              "& .chakra-table__row": {
                backgroundColor: "transparent",
                borderTop: `1px solid ${theme.colors.gray.light[100]}`,
                "&:last-of-type": {
                  borderBottom: `1px solid ${theme.colors.gray.light[100]}`,
                },
              },
              "& .chakra-table__cell": {
                fontSize: 26,
                lineHeight: "1.6",
                padding: "50px 0",
                border: 0,
                verticalAlign: "top",
              },
            }}
          >
            <Table.Body>
              {experence?.map((data, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell width="16.5%">{data?.year}</Table.Cell>
                    <Table.Cell width="41.75%">
                      <BStack>
                        <BText
                          fontSize={36}
                          lineHeight="1.2"
                          fontWeight={500}
                          mb="6px"
                        >
                          {data?.name}
                        </BText>
                        <BText
                          fontSize={18}
                          _hover={{ color: theme.colors.gray.light[50] }}
                          width="fit-content"
                          css={{
                            "& a": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {data?.award}
                        </BText>
                      </BStack>
                    </Table.Cell>
                    <Table.Cell width="41.75%">
                      <BText>{data?.description}</BText>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>
          <BText fontSize={26} lineHeight="1.23" fontWeight={500} my={113}>
            [ My favourite tools ]
          </BText>
          <BGrid templateColumns="3fr 3fr 3fr 3fr" gap="0 25px">
            {tools.map((data, index) => {
              return (
                <BGridItem key={index}>
                  <BStack
                    css={{
                      border: `1px solid ${theme.colors.gray.light[100]}`,
                      borderRadius: "20px",
                      padding: "50px 30px",
                      marginTop: 50,
                      "& img": { maxHeight: 90 },
                      "& svg": { margin: '0 auto' },
                    }}
                  >
                    {data?.icon}
                    <BText
                      fontSize={26}
                      lineHeight="1"
                      textAlign="center"
                      marginTop="15px"
                      fontWeight={500}
                    >
                      {data?.label}
                    </BText>
                  </BStack>
                </BGridItem>
              );
            })}
          </BGrid>
        </BGridItem>
      </BGrid>
    </BStack>
  );
};

export default Resume;
