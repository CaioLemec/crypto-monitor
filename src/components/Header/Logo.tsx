import { Text } from '@chakra-ui/react'

export function Logo() {
    return (
            <Text
                fontSize="3xl"
                letterSpacing="tight"
                w="64"
            >
                Crypto
                <Text 
                    as="span" 
                    color="yellow.400"
                    fontWeight="bold"
                > Monitor</Text>
            </Text>
    );
}