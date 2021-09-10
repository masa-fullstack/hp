import {
  Box,
  Heading,
  Link as _Link,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import lottie from 'lottie-web'
import React, { FC, useEffect, useRef } from "react";
import ISolution from "types/solution";

interface Props {
  solutions: ISolution[];
  hideViewAllLinksNode?: boolean;
}

const solutions: FC<Props> = ({
  solutions = [],
}) => {

  const headingNode = () => {
    return (
      <Box pb={4} d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl">
          solutions
        </Heading>
      </Box>
    );
  };

  const imgNode = (imgUrl: string) => {
    const ref = useRef<HTMLDivElement>()

    useEffect(() => {
      lottie.loadAnimation({
        container: ref.current,
        loop: true,
        autoplay: true,
        path: imgUrl,
      })

    }, [imgUrl])

    return (
      <Box color="gray.900" rounded="lg" p={1} w={320} h={320} d="flex" alignItems="center">
        <Box ref={ref} minWidth={320} />
      </Box>
    );
  };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" fontWeight="bold">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };




  const desktopSolutionsNode = () => {
    return solutions.map((project: ISolution, index: number) => {
      return (
        <Box key={index}>
          <HStack spacing={4}>
            {imgNode(project.imgUrl)}
            <VStack spacing={1} align="left">
              {titleNode(project.title)}
              {descriptionNode(project.description)}
            </VStack>
          </HStack>
        </Box>
      );
    });
  };

  const mobileSolutionsNode = () => {
    return solutions.map((project: ISolution, index: number) => {
      return (
        <Box key={index} mb={24}>
          <VStack spacing={4}>
            {imgNode(project.imgUrl)}
            <VStack spacing={1} align="left">
              {titleNode(project.title)}
              {descriptionNode(project.description)}
            </VStack>
          </VStack>
        </Box>
      );
    });
  };

  return (
    <VStack spacing={8} align="left">
      {headingNode()}
      <Box display={["none", "none", "none", "block"]}>
        {desktopSolutionsNode()}
      </Box>
      <Box display={["block", "block", "block", "none"]} px={4}>
        {mobileSolutionsNode()}
      </Box>
    </VStack>
  );
};

export default solutions;
