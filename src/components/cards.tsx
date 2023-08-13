'use client'

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  BoxProps,
  CardProps,
  Button,
} from '@chakra-ui/react'
import { Roboto, Montserrat} from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'

interface CardsProps extends BoxProps{
  id: string;
  title: string;
  description: string;
  image: string;
}

const IMAGE =
  'https://images.unsplash.com/photo-1614851099511-773084f6911d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

export default function Card({id, title, description, image}: CardsProps) {
  return (
    <Center py={12}>
      <ChakraProvider>
        
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          background={'gray.200'}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
              alt={title}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'2xl'} fontWeight={500}>{title}</Heading>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>{description}</Text>
            <Stack direction={'row'} align={'center'}>
              <Button variant={'ghost'} colorScheme='blue'>View More</Button>
            </Stack>
          </Stack>
        </Box>
      </ChakraProvider>
    </Center>
  )
}