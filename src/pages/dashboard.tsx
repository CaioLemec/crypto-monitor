import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Graphics from "../components/Graphics/";
import { Header } from "../components/Header";
import Head from 'next/head';

export default function Dashboard () {
    return (
        <>
        <Head>
            <title> Dashboard | MonitorCrypto</title>
        </Head>
        <main>
            <Header />
            <SimpleGrid flex="1" gap="2" minChildWidth="480px" align="flex-start" >
                <Graphics cryptoName="BTC"/>
                <Graphics cryptoName="BCH"/>
                <Graphics cryptoName="ETH"/>
                <Graphics cryptoName="LTC"/>
                <Graphics cryptoName="PAXG"/>
            </SimpleGrid>
        </main>
        </>
    )
}