import { Text, Icon, Link } from '@chakra-ui/react'
import { RiLinksLine } from 'react-icons/ri'

export function Footer() {
    return (
        <Text
        align="center" 
        letterSpacing="tight" 
        fontSize="xl"
        >
        Crypto <Text as="span" color="yellow.400"> Monitor </Text>
        foi criado usando a API do <Link href="https://www.mercadobitcoin.com.br/" isExternal>
        <Text as="span" color="#f48120">Mercado Bitcoin</Text> <Icon fontSize="24" color="#f48120" as={RiLinksLine} />
        </Link>.
        </Text>
    );
}



