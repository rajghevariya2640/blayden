import { Link } from "@chakra-ui/react";
import React from "react";

const BLink = ({ ...rest }) => {
  return <Link _hover={{ textDecoration: "none" }} {...rest} />;
};

export default BLink;
