    import {
    Box,
    Center,
    Flex,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Image
    } from '@chakra-ui/react';
    import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
    import { ReactNode } from 'react';

    
    const img="/img/Imumz.png"
    const SocialButton = ({
    children,
    label,
    href,
    }: {
    children: ReactNode;
    label: string;
    href: string;
    }) => {
    return (
        <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
            bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
        </chakra.button>
    );
    };

    export default function Footer() {
    return (
        <Box as="footer" p={4}>
            <Flex align="center">
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }} // Responsive direction
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Image height={10} maxW={20} src={img} display={{ base: 'none', md: 'block' }} /> {/* Set max width for image */}
                    <Text>© 2023 Indah Mutiah MZ. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/indah-mutiah-utami-mz/'}>
                            <FaLinkedin />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'https://www.instagram.com/im_youth28/'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Flex>
        </Box>
    );
    }