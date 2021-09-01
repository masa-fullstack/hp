import { Box } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import React, { FC } from "react";
import { prismDarkTheme } from "styles/code";

const Container: FC = ({ children }) => {
  return (
    <Box bg="gray.100" color="gray.800" minH="100vh">
      <Global styles={prismDarkTheme} />
      {children}
    </Box>
  );
};

export default Container;
