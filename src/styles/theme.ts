import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme ({
    fonts: {
        heading:'Ubuntu',
        body:'Ubuntu',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.700',
                color: 'gray.50'
            }
        }
    }
})