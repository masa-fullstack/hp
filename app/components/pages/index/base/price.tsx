import {
  Box,
  Heading,
  Link as _Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC, useEffect, useRef } from "react";

const price: FC = () => {

  const headingNode = () => {
    return (
      <Box pb={4} d="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h2" size="xl">
          Price
        </Heading>
      </Box>
    );
  };

  const priceNode = (title: string, price: string, memo: string) => {
    return (
      <Box>
        <VStack spacing={1} align="left">
          <Heading as="h3" size="md" fontWeight="bold">
            ・{title}
          </Heading>
          <Text fontSize="lg">{price}</Text>
          <Text fontSize="xs" color="gray.500">{memo}</Text>
        </VStack>
      </Box>
    );
  };

  return (
    <Box maxW="6xl" mx="auto" px={8} py={8} id="price">
      <VStack spacing={8} align="left">
        {headingNode()}
        {priceNode("準委任契約", "6,000円／時", "内容によって価格はご相談に応じます")}
        {priceNode("請負契約", "ご依頼内容に応じてお見積もりいたします", "")}
      </VStack>
    </Box>
  );
};

export default price;
