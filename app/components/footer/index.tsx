import { Box, VStack, HStack, Image, Link as _Link, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

const SocialLinks: FC = () => {
  return (
    <Box p={4} as="footer">
      <Box maxW="6xl" mx="auto" fontSize="xs">
        <Box
          d="flex"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
        >
          <VStack spacing={2}>
            <Box>
              <_Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScieqoBSOzpa-ph30PrkTSttpU_w9wwoEqdnaRo0J6ogdWF2A/viewform"
                target="_blank"
                rel="noopener"
                w={"100%"}
              >
                <Text fontSize="sm">お問合せはこちらからどうぞ</Text>
              </_Link>
            </Box>
            <HStack spacing={2}>
              <Box>
                <Link href="/">
                  <_Link href="/" target="_self" p={4}>
                    <Image
                      src="/images/common/favicon.svg"
                      alt="Logo"
                      boxSize={8}
                      mx="auto"
                    />
                  </_Link>
                </Link>
              </Box>
              <Box p={4}>
                <Text>
                  © 2021 Masahide Ishida
                </Text>
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default SocialLinks;
