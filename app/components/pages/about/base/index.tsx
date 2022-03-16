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
      <Box>
        <Box marginBottom="10">
          <VStack spacing={2} align="left">
            <Heading as="h1" size="xl">
              About Me
            </Heading>
          </VStack>
        </Box>

        <HStack spacing={4} alignItems="center">
          {/* <Box bg="white" color="gray.900" rounded="full" p={1} w={100} h={100}>
            <Image
              // src="/images/common/avatar.png"
              src="/images/common/me.png"
              alt="masahide ishida"
              height={100}
              width={100}
              quality={100}
              priority
            />
          </Box> */}
          <Box>
            <VStack spacing={2} align="left">
              <Heading as="h1" size="xl">
                石田　雅英
              </Heading>
              <Text>WEBエンジニア</Text>
            </VStack>
          </Box>
        </HStack>
      </Box>
    );
  };

  const bioDescriptionNode = () => {
    return (
      <Box className="article">
        <Text>
          フリーランスのITコンサル、WEBエンジニアとして活動しています。<br />
          グローバルなDAO組織でブロックチェーン関連の開発も行なっています。<br />
          <br />
          2004年より国内大手メーカーで社内システムの開発、運用を2社経験。<br />
          2019年より国内教育事業会社でIT企画を経験。<br />
          2021年よりフリーランスとして独立しました。<br />
          エンジニア歴１９年目です。<br />
          WEBサイト制作、WEBサービス開発、アプリ開発に加え、デジタルトランスフォーメーション、業務プロセス見直しなどコンサルティング、メンタリング(技術指導)も承っております。<br />
        </Text>

        <Heading as="h1" size="lg" mt={16} mb={8}>
          Motivation
        </Heading>
        <Text>
          国内の少子高齢化、テクノロジー活用の遅れによって、中長期に渡り経済的な貧困化が進んでいくことが想定されます。<br />
          テクロジー活用でコアビジネスに注力できるようにして、効率的に価値提供できる環境を作りたいと考えています。<br />
          それによって、少しでも皆の生活が良くなる一助になればと思います。<br />
          <br />
          また、80歳まで競争力をもったエンジニアとして活動できるよう、日々新たに学び、楽しく働くことにコミットしています。<br />
        </Text>

        <Heading as="h1" size="lg" mt={16} mb={8}>
          Skills
        </Heading>
        <Text>
          【コード】<br />
          HTML, CSS, JavaScript(TypeScript), SQL, GraphQL, Google Apps Script, Python, C, Haskell<br />
          <br />
          【フレームワーク】<br />
          React, NextJS, NestJS, LIFF, Django<br />
          <br />
          【クラウドプラットフォーム】<br />
          AWS, GCP, Vercel, Netlify ... etc<br />
          <br />
          【アプリケーション】<br />
          Docker, Git, UiPath, DataSpider, Vscode ... etc<br />
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
    <Box maxW="6xl" mx="auto" px={8} py={8} id="about">
      <Grid templateColumns="1fr">
        <Box as="section">
          <VStack spacing={16} align="left">
            {headingNode()}
            {bioDescriptionNode()}
            {socialLinksNode()}
          </VStack>
        </Box>
      </Grid>
    </Box >
  );
};

export default Page;
