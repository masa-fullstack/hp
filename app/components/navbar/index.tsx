import {
  Box,
  Button,
  HStack,
  Link as _Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Link as Scroll } from 'react-scroll';

interface NavLink {
  url: string;
  title: string;
  target: string;
  scroll?: string;
}

const LINKS = [
  {
    url: "/solutions",
    title: "Solutions",
    target: "_self",
    scroll: "solutions"
  },
  {
    url: "/projects",
    title: "Projects",
    target: "_self",
    scroll: "projects"
  },
  {
    url: "/about",
    title: "About",
    target: "_self",
    scroll: "about"
  },
  {
    url: "https://docs.google.com/forms/d/e/1FAIpQLScieqoBSOzpa-ph30PrkTSttpU_w9wwoEqdnaRo0J6ogdWF2A/viewform?usp=sf_link",
    title: "Contact",
    target: "_blank"
  },

];

const Navbar: FC = () => {
  const mobileMenuNode = () => {
    return (
      <Menu id="menu_1">
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList placement="bottom-end" bg="gray.900" color="white">
          {[
            LINKS.map((link: NavLink) => {
              return (
                <Box key={link.url}>
                  {link.scroll ? <Scroll to={link.scroll} smooth={true} duration={600} offset={-10}><Box p={4} _hover={{ cursor: "pointer", textDecoration: "underline" }}>{link.title}</Box></Scroll> :
                    <Link href={link.url}>
                      <Box p={4}>
                        <_Link href={link.url} rounded="md" target={link.target}>
                          {link.title}
                        </_Link>
                      </Box>
                    </Link>
                  }
                </Box>
              );
            }),
          ]}
        </MenuList>
      </Menu>
    );
  };

  const desktopMenuNode = () => {
    return (
      <HStack isInline spacing={4} alignItems="center">
        {[
          LINKS.map((link: NavLink) => {
            return (
              <Box key={link.url}>
                {link.scroll ? <Scroll to={link.scroll} smooth={true} duration={600} offset={-10}><Box p={4} _hover={{ cursor: "pointer", textDecoration: "underline" }}>{link.title}</Box></Scroll> :
                  <Link href={link.url}>
                    <Box p={4}>
                      <_Link href={link.url} rounded="md" target={link.target}>
                        {link.title}
                      </_Link>
                    </Box>
                  </Link>
                }
              </Box>
            );
          }),
        ]}
      </HStack>
    );
  };

  return (
    <Box
      as="header"
      zIndex={1}
      bg="gray.900"
      color="white"
      shadow="md"
      fontWeight="bold"
      px={4}
      borderTopWidth={5}
      borderColor="blue.400"
      id="top"
    >
      <Box maxW="6xl" mx="auto">
        <HStack justifyContent="space-between" alignItems="center" py={4}>
          <Box d="flex" alignItems="center">
            <Link href="/">
              <_Link href="/" d="flex">
                <Image
                  src="/images/common/favicon.svg"
                  alt="Logo"
                  height={32}
                  width={32}
                  quality={100}
                  priority
                />
              </_Link>
            </Link>
          </Box>
          <Box display={["none", "none", "none", "block"]}>
            {desktopMenuNode()}
          </Box>
          <Box display={["block", "block", "block", "none"]} px={4}>
            {mobileMenuNode()}
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
