import { Box, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import ISolution from "types/solution";

const Jumbotron = dynamic(
  import(
    /* webpackChunkName: "Jumbotron" */ "components/pages/index/base/jumbotron"
  )
);
const Solutions = dynamic(
  import(
    /* webpackChunkName: "Solutions" */ "components/pages/index/base/solutions"
  )
);

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
      <Box mt={24}>
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
