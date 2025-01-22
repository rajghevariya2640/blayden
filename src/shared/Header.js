import React from "react";
import { Logo } from "../assets/image/svg/Icon";
import { menuList } from "../description/home.description";
import theme from "../theme/Theme";
import BBox from "./BBox";
import BGrid from "./BGrid";
import BGridItem from "./BGridItem";
import BLink from "./BLink";
import BList from "./BList";
import BListItem from "./BListItem";
import BStack from "./BStack";
import BText from "./BText";

const Header = () => {
  return (
    <BStack as="header" py="30px" position="fixed" width="100%" zIndex="999">
      <BGrid templateColumns="2fr 8fr 2fr" alignItems="center">
        <BGridItem pl="50px">
          <BStack
            as="a"
            direction="row"
            alignItems="center"
            gap="0"
            backdropFilter="blur(6px)"
            width="fit-content"
            borderRadius={8}
            overflow="hidden"
          >
            <Logo />
            <BText
              fontSize="26px"
              fontWeight="semibold"
              color={theme.colors.white}
              padding="0 10px 0 16px"
            >
              Blayden*
            </BText>
          </BStack>
        </BGridItem>
        <BGridItem px="25px">
          <BList
            display="flex"
            alignItems="center"
            flexDirection="row"
            gap={50}
            px="25px"
            borderRadius={8}
            overflow="hidden"
            backdropFilter="blur(6px)"
            width="fit-content"
          >
            {menuList.map((data, index) => (
              <BListItem key={index}>
                <BLink
                  height={50}
                  lineHeight="1"
                  fontSize={18}
                  color={theme.colors.gray.light[50]}
                  textTransform="capitalize"
                  fontWeight={500}
                  transition="all 0.15s ease-in-out"
                  position="relative"
                  overflow="hidden"
                  className={`${data.class && "active"}`}
                  css={{
                    "&.active": {
                      color: theme.colors.white,
                      _after: {
                        content: "''",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "1px",
                        width: "100%",
                        backgroundColor: theme.colors.white,
                        transition: "all 0.15s ease-in-out",
                      },
                    },
                  }}
                  _hover={{
                    color: theme.colors.white,
                  }}
                >
                  {data?.label}
                </BLink>
              </BListItem>
            ))}
          </BList>
        </BGridItem>
        <BGridItem>
          <BStack
            css={{
              height: 50,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: 'blur(6px)',
              borderRadius: 10
            }}
          >
            <BBox
              as="span"
              css={{
                height: "26px",
                width: "26px",
                backgroundColor: theme.colors.main,
                borderRadius: 50,
              }}
            ></BBox>
          </BStack>
        </BGridItem>
      </BGrid>
    </BStack>
  );
};

export default Header;
