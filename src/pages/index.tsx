import { Flex, Text, VStack, Image, Button, Icon, Link } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { AiOutlineStock } from 'react-icons/ai';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
    <Head>
      <title> Início | MonitorCrypto</title>
    </Head>
    <main>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100vw" alignItems="center" justifyContent="center" m="auto">
          <Flex w="50%" justifyContent="center" maxWidth={700} minWidth={350}>
            <VStack>
              <Text textAlign="center" fontSize="4xl">The main cryptocurrencies</Text>
              <Text textAlign="center" textColor="orange.500" fontSize="5xl">just in one place...</Text>
              <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                <Button
                leftIcon={<Icon fontSize="24" as={AiOutlineStock} />}
                fontSize="2xl"
                size="lg"
                w="64"
                type="submit" 
                mt="4" 
                bg="orange.500"
                color="white"
                _hover={{ bg: "white", color: "orange.500" }}
                _focus={{
                  border: "none",
                  textDecor: "none",
                }}
                >
                    Check it out !
                </Button>
              </Link>
            </VStack>
          </Flex>
          <Flex w="50%" justifyContent="flex-start">
            <Image maxWidth={650} minWidth={350} src="images/main.svg" alt="Crypto Coin" />
          </Flex>
        </Flex>
        <Footer />
    </Flex>
    </main>
    </>
  )
}





// terminar homepage
// trocar as cores, logo, hover e botões.
// autenticação com github