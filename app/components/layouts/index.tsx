import { ChakraProvider, DarkMode, extendTheme, theme } from "@chakra-ui/react";
import Container from "components/layouts/container";
import React, { FC } from "react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    ...theme.fonts,
    heading: 'roboto',
    body: 'Noto Sans JP',
    mono: "Menlo, Monaco, Consolas, Courier New, monospace",
  },
});

const Layout: FC = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <DarkMode>
        <Container>{children}</Container>
      </DarkMode>
    </ChakraProvider>
  );
};

export default Layout;
