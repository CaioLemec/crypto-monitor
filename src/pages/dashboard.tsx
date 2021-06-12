import { SimpleGrid } from "@chakra-ui/react";
import Graphics from "../components/Graphics/";
import { Header } from "../components/Header";
import Head from 'next/head';
import { useSession } from 'next-auth/client'
import ModalSessionRequired from "../components/Graphics/ModalSessionRequired";
import React from "react";

export default function Dashboard () {
    const [session] = useSession();
    return (
        <>
        <Head>
            <title> Dashboard | MonitorCrypto</title>
        </Head>
        <main>
            <Header />
            {session !== null ? 
                <SimpleGrid gap="2" minChildWidth="480px" align="flex-start" >
                    <Graphics cryptoName="BTC"/>
                    <Graphics cryptoName="BCH"/>
                    <Graphics cryptoName="ETH"/>
                    <Graphics cryptoName="LTC"/>
                    <Graphics cryptoName="PAXG"/>
                </SimpleGrid>
            :
            <>

            <SimpleGrid gap="2" minChildWidth="480px" align="flex-start" >
                <Graphics cryptoName="BTC" isLoading={true}/>
                <Graphics cryptoName="BCH" isLoading={true}/>
                <Graphics cryptoName="ETH" isLoading={true}/>
                <Graphics cryptoName="LTC" isLoading={true}/>
                <Graphics cryptoName="PAXG" isLoading={true}/>
                <ModalSessionRequired />
            </SimpleGrid>
            </>
            }
        </main>
        </>
    )
}