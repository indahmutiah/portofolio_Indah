import { NextPage } from 'next'
import Head from "next/head"
import LandingP from '@/components/landingpage'
import CardsContainer from '@/components/cardscontainer'
import Footer from '@/components/footer'
import styles from '@/styles/Home.module.css'
import {Center, Grid, GridItem} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
// import Image from 'next/image'

// Grid:  https://chakra-ui.com/docs/components/grid/usage
const Home:NextPage = () => {

  const cards = [
    {
      id:'1',
      title:'My Biography',
      description: 'A little introduction about who I am',
      image:'/img/computer.jpg'
    },
    {
      id:"2",
      title:'Training and Short Course Experience',
      description: 'I love learn something new about IT. So look at my training experience',
      image:'/img/growtika-2.jpg'
    },
    {
      id:"3",
      title:'My Projects',
      description: 'Always improve my skilss and you can view my training experience in here',
      image:'/img/growtika-3.jpg'
    }
  ];

  return (
    <>
    <Head>
      <title>Indah Mutiah MZ Website</title>
      <meta name="description" content="Generated by create-t3-app" />
    </Head>
    <main>
      <ChakraProvider>
        <LandingP></LandingP>
        <Center>
        <Heading as={'h1'} size={'xl'} marginTop={50} marginBottom={50} id='cards'> MY TOPICS</Heading>
        </Center>
        
        {/* <Grid templateColumns='repeat(3, 1fr)' gap={6} >
          {cards.map((p) => <GridItem key={p.id}>
            <Cards ></Cards>
          </GridItem>)}  
        </Grid> */}
        <CardsContainer cards={cards} />
        
        <Footer></Footer>
      </ChakraProvider>
      
    </main>
    </>
  );
};


export default Home;
