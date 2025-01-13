import { Stack } from "@chakra-ui/react";
import React from "react";

const BStack = ({ ...rest }) => {
  return <Stack gap={0} {...rest} />;
};

export default BStack;
