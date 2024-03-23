import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'system',
        useSystemColorMode: true,
    },
    fonts: {
        body: '"Poppins", sans-serif',
        heading: '"Poppins", sans-serif',
        mono: '"Poppins", sans-serif',
    },
    shadows: {
        normal: "0 0 6px 3px rgba(0, 0, 0, 0.05)",
    },
})

export default theme