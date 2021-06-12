import { Flex, Text, VStack, Image, Box, Link, Icon } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/Footer';
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
        <Text fontSize="5xl">Terminar home</Text>
        <Text fontSize="4xl">Falta Responsividade</Text>
        <Text fontSize="4xl">Retoques finais?</Text>
      </VStack>
      <Box boxSize="700px" alignItems="flex-end" ml={8}>
        <Image src="images/main.svg" alt="Crypto Coin" />
      </Box>
    </Flex>
    <Footer />
    </main>
    </>
  )
}



// terminar homepage
// trocar as cores, logo, hover e botões.
// autenticação com github