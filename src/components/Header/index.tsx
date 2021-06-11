import { Flex, Spacer } from '@chakra-ui/react'
import React from 'react';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { SignInButton } from './SignInButton';

export function Header() {
    return (
        <Flex 
            as="header" 
            w="100%" 
            maxWidth={1480}
            h="10vh"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Logo />
            <Menu />
            <Spacer />
            <SignInButton />
        </Flex>
    );
}