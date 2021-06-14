import { Text, Icon, Link } from '@chakra-ui/react'
import { RiLinksLine } from 'react-icons/ri'

export function Footer() {
    return (
        <Text
        align="center" 
        letterSpacing="tight" 
        fontSize="xl"
        mt={4}
        mb={4}
        justifyContent="center"
        >
        Crypto <Text as="span" color="orange.500"> Monitor </Text>
        was created using the API of <Link href="https://www.mercadobitcoin.com.br/" isExternal>
        <Text as="span" color="orange.500">Mercado Bitcoin</Text> <Icon fontSize="24" color="#f48120" as={RiLinksLine} />
        </Link>.
        </Text>
    );
}



