import { ChakraProvider } from '@chakra-ui/react'
import { Box, Button, Stack, } from '@chakra-ui/react'
import { Roboto, Montserrat} from 'next/font/google'
import Typewriter from 'typewriter-effect';
import styles from '@/styles/Home.module.css'
import { extendTheme, theme } from '@chakra-ui/react'
import { Global } from '@emotion/react';

export default function LandingP(prop:any) {
    const boxStyle = {
        background: 'linear-gradient(to right, #780206, #061161)',
        width: '100%',
        height: '100vh'
        };
    const customTheme: Record<string, any> = extendTheme(theme, {
        fonts: {
        body: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        heading: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        },
    });

    return (
    
    <Box style= {boxStyle}>
        <br></br>
        <Box mt={270} />
        <Stack>
            <Typewriter
                options={{
                autoStart: true,
                loop: false,
                }}
                onInit={(typewriter) => {
                typewriter.typeString('<center><span style="color:#ffff; font-size:200%; font-family:gill sans; "> Welcome to </span></center')
                
                typewriter.typeString('<center><strong><span style="color:#ffff; font-size:360%; font-family:gill sans;">Indah Mutiah U.Mz&apos;s </span></strong></center>')
                    
                typewriter.typeString('<center><span style="color:#ffff; font-size:200%; font-family:gill sans; "> Website </span></center')
                    .pauseFor(2500)
                    .start();
                }}
            />
        </Stack>
        <div></div>
        <Stack direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
            <ChakraProvider theme={customTheme}>
                <Global styles={`
                @font-face {
                    font-family: 'Montserrat';
                    font-style: cursive;
                    font-display: swap;
                    font-weight: 400;
                    src: url('/montserrat-all-400-normal.woff') format('woff');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                `}/>
            <Button 
                // bg="#f0f0f0"
                borderRadius="12"
                px={5}
                py={4}
                bg="#E2E8F0"
                _hover={{ bg: 'White' }}
                >
                Get Started
            </Button>
            </ChakraProvider>
        </Stack>
        
    </Box>
    
    )
}