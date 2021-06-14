import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme ({
    colors: {
        gray: {
            "900": "#0f0f0f",
        },
        orange: {
            "500": "#f48120",
        }
    },
    fonts: {
        heading:'Ubuntu',
        body:'Ubuntu',
    },
    styles: {
        global: {
            body: {
                bgGradient: "linear(to-l, gray.900, black)",
                color: 'gray.50'
            }
        }
    }
})