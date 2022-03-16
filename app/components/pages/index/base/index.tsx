import { Box, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import ISolution from "types/solution";
import Jumbotron from "./jumbotron";
import Solutions from "./solutions";


interface Props {
  solutions: ISolution[];
}

const Page: FC<Props> = ({
  solutions = [],
}) => {
  return (
    <>
      <Box as="section">
        <Jumbotron />
      </Box>
      <Box mt={{ base: 24, md: 40 }}>
        <Box maxW="6xl" mx="auto" px={8} py={8} id="solutions">
          <VStack spacing={32} order={[2, 2, 2, 1]} align="left">
            <Box as="section">
              <Solutions solutions={solutions.slice(0, 10)} />
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Page;
