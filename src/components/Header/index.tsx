import { Flex, Spacer } from '@chakra-ui/react'
import { Logo } from './Logo';
import { Menu } from './Menu';
import { SignInButton } from './SignInButton';

export function Header() {
    return (
        <Flex 
            as="header" 
            maxWidth={1480}
            mx="auto"
            mt="4"
            px="6"
            align="center"
            w="100%"
        >
            <Logo />
            <Menu />
            <Spacer />
            <SignInButton />
        </Flex>
    );
}