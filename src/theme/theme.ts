import { extendBaseTheme } from '@chakra-ui/react'

const theme = extendBaseTheme({
    config: {
        initialColorMode: 'system',
        useSystemColorMode: true,
    }
})

export default theme