import { Flex, Text, VStack, Image, Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
    <Head>
      <title> Início | MonitorCrypto</title>
    </Head>
    <main>
    <Header />
    <Flex w="100vw" h="80vh" alignItems="center" justifyContent="center">
      <VStack>
        <Text>Opa Lê Lê</Text>
        <Text>Opa Lê Lê</Text>
        <Text>Opa Lê Lê</Text>
      </VStack>
      <Box boxSize="sm">
        <Image src="images/homeimg2.png" alt="Crypto Coin" />
      </Box>
    </Flex>
    </main>
    </>
  )
}



// terminar homepage
// trocar as cores, logo, hover e botões.
// autenticação com github