import {
  Box,
  Flex,
  Heading,
  HStack,
  Link as _Link,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import IProject from "types/project";

interface Props {
  projects: IProject[];
  hideViewAllLinksNode?: boolean;
}

const projects: FC<Props> = ({
  projects = [],
  hideViewAllLinksNode = false,
}) => {
  const viewAllLinksNode = () => {
    if (hideViewAllLinksNode) return false;

    return (
      <Link href="/projects">
        <_Link p={2} href="/projects" rounded="md">
          <HStack spacing={2} alignItems="center">
            <Box fontWeight="bold">View all projects</Box>
            <Box as={IoMdArrowRoundForward} size="15px" />
          </HStack>
        </_Link>
      </Link>
    );
  };

  const headingNode = () => {
    return (
      <Box pb={4} d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl">
          Projects
        </Heading>
        {viewAllLinksNode()}
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" color="blue.400" fontWeight="bold">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const skillsNode = (skill: string) => {
    return (
      <Tag size={"sm"} color={"blue.400"} bgColor={"blue.50"} m={"0.5"}>{skill}</Tag>
    )
  };

  const projectsNode = () => {
    return projects.map((project: IProject, index: number) => {
      return (
        <Box key={index}>
          <a href={project.url} target="_blank" rel="noopener">
            <VStack spacing={1} align="left">
              {titleNode(project.title)}
              {descriptionNode(project.description)}
              <Flex wrap={"wrap"}>{project.skills.map((skill) => skillsNode(skill))}</Flex>
            </VStack>
          </a>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      {projectsNode()}
    </VStack>
  );
};

export default projects;
