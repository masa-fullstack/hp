import Page from "components/pages/index/base/index";
import ProjectsPage from "components/pages/projects/base";
import AboutPage from "components/pages/about/base";
import { NextPage } from "next";
import { Box, Image } from "@chakra-ui/react";

import solutions from "public/data/solutions.json";
import projects from "public/data/projects.json";
import { useEffect, useState } from "react";
import { Link as Scroll } from 'react-scroll';

const root = process.cwd();

const IndexPage: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Page solutions={solutions} />
      <Box mt={{ base: 24, md: 64 }} />
      <ProjectsPage projects={projects} />
      <Box mt={{ base: 24, md: 64 }} />
      <AboutPage />
      {scrollPosition > 500 && (<Scroll to="top" smooth={true} duration={600} offset={-10}>
        <Box position='fixed'
          bottom='20px'
          right={['16px', '84px']}
          zIndex={1}
          _hover={{ cursor: "pointer" }}
        >
          <Image
            src="/images/common/top.svg"
            alt="Logo"
            boxSize={{ base: 24, md: 120 }}
            mx="auto"
          />
        </Box>
      </Scroll>)}
    </>
  );
};


export default IndexPage;
