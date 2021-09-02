// import { Box, Heading, Text, VStack } from "@chakra-ui/react";
// import React, { FC } from "react";

// const Jumbotron: FC = () => {
//   return (
//     <VStack
//       spacing={2}
//       alignItems="center"
//       justifyContent="center"
//       textAlign="center"
//       p={[4, 12, 16, 24]}
//     >
//       <Box>
//         <Heading as="h1" fontFamily="body" bgColor="blue.400" bgClip="text">
//           Hi, I'm Nirmalya
//         </Heading>
//       </Box>
//       <Box>
//         <Text>
//           I'm a <Box as="b">Developer</Box>, who likes{" "}
//           <Box as="b">designing</Box> <Box as="b">writing</Box> and building{" "}
//           <Box as="b">Open Source</Box> stuffs.
//         </Text>
//       </Box>
//     </VStack>
//   );
// };

// export default Jumbotron;

import React, { FC } from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const Jumbotron: FC = () => {

  return (
    <Flex
      w={'full'}
      h={'93vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            業務をもっと早く簡単に。<br />
            テクノロジー活用で<br />
            事業競争力の向上をサポートします。
          </Text>
          {/* <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              onClick={}
              _hover={{ bg: 'blue.500' }}>
              Show me more
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button>
          </Stack> */}
        </Stack>
      </VStack>
    </Flex>
  );
}

export default Jumbotron;