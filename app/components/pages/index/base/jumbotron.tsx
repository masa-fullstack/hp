import React, { FC } from "react";
import {
  Stack,
  Flex,
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
        'url(/images/common/hero.jpeg)'
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
            スマートな働き方をサポートします。
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default Jumbotron;