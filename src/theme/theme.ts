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
    }
})

export default theme