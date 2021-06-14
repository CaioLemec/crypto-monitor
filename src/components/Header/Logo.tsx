import { Text, Link } from '@chakra-ui/react'


export function Logo() {
    return (
            <Link href="/" style={{ textDecoration: 'none' }}>
            <Text
                fontSize="3xl"
                letterSpacing="tight"
                w="64"
            >
                Crypto
                <Text 
                    as="span" 
                    color="orange.500"
                    fontWeight="bold"
                > Monitor</Text>
            </Text>
            </Link>
    );
}