import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { Box, Text, theme, Flex, Spinner, VStack } from '@chakra-ui/react';
const Chart = dynamic(() => import('react-apexcharts'),{
  ssr: false,
});

export default function CryptoData(props) {
  const [todayCryptoValues, setTodayCryptoValues] = useState([]); 
  const [yesterdayCryptoValues, setYesterdayCryptoValues] = useState([]); 
  const [twoDaysAgoCryptoValues, setTwoDaysAgoCryptoValues] = useState([]); 
  const [mounthAgoCryptoValues, setMounthAgoCryptoValues] = useState([]); 

  const today = new Date();
  const year = today.getUTCFullYear();
  const month = (today.getMonth()+1);
  const day = today.getDate();

  useEffect(() => {
    async function GetTodayCryptoValues() {
      try {
        await fetch(`https://www.mercadobitcoin.net/api/${props.cryptoName}/ticker/`)
        .then(response => response.json())
        .then(data => setTodayCryptoValues(data.ticker))
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    GetTodayCryptoValues();
  }, []); 

  useEffect(() => {
    async function GetYesterdayCryptoValues() {
      try {
        await fetch(`https://www.mercadobitcoin.net/api/${props.cryptoName}/day-summary/${year}/${month}/${day-1}/`)
        .then(response => response.json())
        .then(data => setYesterdayCryptoValues(data))
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    GetYesterdayCryptoValues();
  }, []);

  useEffect(() => {
    async function GetCryptoTwoDaysAgoValues() {
      try {
        await fetch(`https://www.mercadobitcoin.net/api/${props.cryptoName}/day-summary/${year}/${month}/${day-2}/`)
        .then(response => response.json())
        .then(data => setTwoDaysAgoCryptoValues(data))
      } catch (error) {
        alert("Ocorreu um erro ao buscar os items");
      }
    }
    GetCryptoTwoDaysAgoValues();
  }, []);

  useEffect(() => {
  async function getCryptoMounthValues() {
    try {
      await fetch(`https://www.mercadobitcoin.net/api/${props.cryptoName}/day-summary/${year}/${month-1}/${day}/`)
      .then(response => response.json())
      .then(data => setMounthAgoCryptoValues(data))
    } catch (error) {
      alert("Ocorreu um erro ao buscar os items");
    }
  }
  getCryptoMounthValues();
}, []);

const todayFormattedLastPrice = new Intl.NumberFormat('pt-Br', {style: 'currency',currency: 'BRL',}).format((todayCryptoValues.last))
const todayFormattedHighPrice = new Intl.NumberFormat('pt-Br', {style: 'currency',currency: 'BRL',}).format((todayCryptoValues.high))
const todayFormattedLowPrice = new Intl.NumberFormat('pt-Br', {style: 'currency',currency: 'BRL',}).format((todayCryptoValues.low))
const todayFormattedOpenPrice = new Intl.NumberFormat('pt-Br', {style: 'currency',currency: 'BRL',}).format((todayCryptoValues.open))

const todayValueChart = Math.round(todayCryptoValues.last)
const yesterdayValueChart = Math.round(yesterdayCryptoValues.opening)
const twoDaysAgoValueChart = Math.round(twoDaysAgoCryptoValues.opening)
const mounthAgoValueChart = Math.round(mounthAgoCryptoValues.opening)

const todayDatesValue = new Date().toLocaleString('pt-BR', {day: '2-digit', month: '2-digit', year: '2-digit'})
const yesterdayDatesValue = new Date(yesterdayCryptoValues.date).toLocaleString('pt-BR', {day: '2-digit', month: '2-digit', year: '2-digit'})
const twoDaysAgoDatesValue = new Date(twoDaysAgoCryptoValues.date).toLocaleString('pt-BR', {day: '2-digit', month: '2-digit', year: '2-digit'})
const mounthAgoDatesValue = new Date(mounthAgoCryptoValues.date).toLocaleString('pt-BR', {day: '2-digit', month: '2-digit', year: '2-digit'})

  const options = {
    series: [{
      name: props.cryptoName,
      data: [mounthAgoValueChart,twoDaysAgoValueChart,yesterdayValueChart, todayValueChart], 
    }],
    colors: ['#f48120'],
    title: {
      text: props.cryptoName,
      align: 'topCenter'
    },
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[600],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      shared: true,
      theme: false,
      style: {
        fontSize: '15px',
        fontFamily: 'Ubuntu'
      },
      marker: {
          show: false,
      },
      fixed: {
          enabled: true,
          position: 'topLeft',
          offsetX: 0,
          offsetY: -30,
      },
    },
    yaxis: {
      opposite: false,
      labels: {
        formatter: function (value) {
          return "R$" + ' ' + value;
        }
      },
    },
    xaxis: {

      type: `string`,
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        mounthAgoDatesValue,
        twoDaysAgoDatesValue,
        yesterdayDatesValue,
        todayDatesValue,
      ],
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.9,
        opacityTo: 0.3,
      }
    }
    
  };
  
  return (
      <Box
        mt="8%"
        bg="gray.800"
        borderRadius={8}
        mb={4}
        mr={4}
        ml={4}
      >
        { props.isLoading === true ?
        <>
        <Flex justifyContent="center" h="35vh" alignItems="center" color ={theme.colors.gray[600]}>
        <Spinner size="xl" />
        </Flex>
        </>
        :
        <>
        <Chart type="area" height={250} options={options} series={options.series} />
        <Flex color={theme.colors.gray[600]} justifyContent="center">
        <VStack mr={4}>
        <Text color="orange.500">Open:</Text>
        <Text textAlign="center" fontSize="sm" mr="4">{todayFormattedOpenPrice}</Text>
        </VStack>
        <VStack mr={4}>
        <Text color="orange.500">Low:</Text>
        <Text textAlign="center" fontSize="sm" mr="4">{todayFormattedLowPrice}</Text>
        </VStack>
        <VStack mr={4}>
        <Text color="orange.500">High:</Text>
        <Text textAlign="center" fontSize="sm" mr="4">{todayFormattedHighPrice}</Text>
        </VStack>
        <VStack mr={4}>
        <Text color="orange.500">Last:</Text>
        <Text textAlign="center" fontSize="sm" mr="4">{todayFormattedLastPrice}</Text>
        </VStack>
        </Flex>
        </>
        }
      </Box>
  )
}

// Duvida:
// Tirar problems 'any[]' usando typescript