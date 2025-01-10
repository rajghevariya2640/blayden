import { Button } from "@chakra-ui/react";
import React from "react";

const BButton = ({ css: customCss, ...rest }) => {
  return <Button {...rest} css={{
    fontSize: '18px',
    lineHeight: '1.4',
    height: 'unset',
    gap: '10px',
    padding: 0,
    ...customCss,
  }} />;
};

export default BButton;
