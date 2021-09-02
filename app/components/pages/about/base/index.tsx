import {
  Box,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";

const Page: FC = () => {
  const headingNode = () => {
    return (
      <HStack spacing={4} alignItems="center">
        <Box bg="white" color="gray.900" rounded="full" p={1} w={100} h={100}>
          <Image
            src="/images/common/avatar.png"
            alt="Nirmalya Ghosh"
            height={100}
            width={100}
            quality={100}
            priority
          />
        </Box>
        <Box>
          <VStack spacing={2} align="left">
            <Heading as="h1" size="xl">
              石田　雅英
            </Heading>
            <Text>WEBエンジニア</Text>
          </VStack>
        </Box>
      </HStack>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <Text>
          ITコンサル、エンジニアとして活動中です。
        </Text>
        <br />
        <Text>
          関西の大手メーカーや教育事業会社で社内システムのIT企画、開発、運用を経験し独立しました。
        </Text>
        <br />
        <Text>
          WEBサイト制作、WEBサービス開発、アプリ開発に加え、デジタルトランスフォーメーション、業務プロセス見直しなどコンサル領域も承っております。
        </Text>
        <br />
        <Text>
          ブロックチェーン技術についても多少の知見がありますので、Dapps開発、NFT化代行などもご相談下さい。
        </Text>
        <br />
        <br />
        <Text>
          お問い合わせはメニューの「Contact」よりお願い致します。
        </Text>
      </Box>

    );
  };

  const socialLinksNode = () => {
    return (
      <VStack spacing={4} align="left">
        <VStack spacing={8} align="left">
          <Heading as="h2" size="lg">
            Social profiles
          </Heading>
          <Text>You can find me in the following social websites:</Text>
        </VStack>
        <Box d="flex" alignItems="center">
          <HStack spacing={4}>
            <Link
              py={2}
              px={4}
              href="https://github.com/masa-fullstack"
              rounded="md"
              bg="#333"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoGithub} /> <Text>Github</Text>
              </HStack>
            </Link>
            <Link
              py={2}
              px={4}
              href="https://twitter.com/_i_masa"
              rounded="md"
              bg="#0e76a8"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoTwitter} /> <Text>Twitter</Text>
              </HStack>
            </Link>
          </HStack>
        </Box>
      </VStack>
    );
  };

  return (
    <Box maxW="2xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <VStack spacing={8} align="left">
            {headingNode()}
            {bioDescriptionNode()}
            {socialLinksNode()}
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
