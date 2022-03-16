import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC, FormEvent, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import IProject from "types/project";

interface Props {
  projects: IProject[];
}

const Projects: FC<Props> = ({ projects = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const sortedProjects = projects.filter((project: IProject) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searchNode = () => {
    return (
      <Box>
        <Input
          bg="white"
          color="gray.800"
          value={searchQuery}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setSearchQuery(e.currentTarget.value)
          }
          placeholder="Search for an project"
        />
      </Box>
    );
  };

  const headingNode = () => {
    return (
      <Box>
        <VStack spacing={2} align="left">
          <Heading as="h1" size="xl">
            Projects
          </Heading>
        </VStack>
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" letterSpacing="tight" lineHeight="tall">
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

  const imgNode = (imgUrl: string) => {
    return (
      <Image
        src={`/images/common/${imgUrl}`}
        alt="Project Image"
        boxSize={64}
        objectFit="cover"
      />

    );
  }


  const ctaNode = () => {
    return (
      <Button rightIcon={<IoMdArrowForward />} fontSize="sm">
        View project
      </Button>
    );
  };

  const projectsNode = () => {
    if (!sortedProjects.length) {
      return (
        <VStack mx="auto" textAlign="center" w="100%">
          <Image
            src="/images/common/no-items.svg"
            alt="No projects found!"
            boxSize={64}
          />
          <Text>No projects found!</Text>
        </VStack>
      );
    }

    return (
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={8}>
        {sortedProjects.map((project: IProject, index: number) => {
          return (
            <Box
              key={index}
              bg="white"
              color="gray.800"
              rounded="md"
              shadow="md"
            >
              <a href={project.url} target="_blank" rel="noopener">
                <Box p={8}>
                  <VStack
                    spacing={4}
                    minH={48}
                    justifyContent="space-between"
                    align="left"
                  >
                    <VStack spacing={1} align="left">
                      {titleNode(project.title)}
                      {descriptionNode(project.description)}
                      <Flex wrap={"wrap"}>{project.skills.map((skill) => skillsNode(skill))}</Flex>
                    </VStack>
                    {project.imgUrl && <Box>{imgNode(project.imgUrl)}</Box>}
                    <Box>{ctaNode()}</Box>
                  </VStack>
                </Box>
              </a>
            </Box>
          );
        })}
      </Grid>
    );
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      {searchNode()}
      {projectsNode()}
    </VStack>
  );
};

export default Projects;
