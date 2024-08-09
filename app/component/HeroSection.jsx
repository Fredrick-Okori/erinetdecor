"use client"
import React, { useEffect } from 'react';
import {
    Box,
    VStack,
    Text,
    Button,
    Stack,
    Heading,
} from '@chakra-ui/react';





const HeroSection = () => {
  
    return (
        <Box
            height="100vh"
            backgroundImage="url('/hero.webp')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundAttachment="fixed"
            // display="grid"
            width="100%"
            zIndex={100}   
            display="grid"
            margin='auto'
          
        >
           
            <VStack
               
               
                mt={15}
                align="center"
                justify="center"
                width="100%"
                py={{base: 16, md: 24}}
                
                spacing={6}
                textAlign="center"
                color='var(--clr-primary-1)'
                justifyContent="center"
                
               
            >
                <Heading fontSize={{base: "5xl", lg: '8xl'}}
                    color='black'
                    fontWeight="bold"
                    letterSpacing="wide"
                    textOverflow="ellipsis"
                    overflowWrap="break-word"
                    
                >Erinet Decor & Events</Heading>
                <Text fontSize="xl" maxW="600px">
                    Putting everything together will make your  idea even look fancier and more interesting. 
                Get integrated systems that will make your idea greater
                   
                </Text>
                <Stack direction="row" spacing={4}>
                    {/* <Button color="#c13d60" size="lg">Contact us</Button>
                    <Button color="#c13d60" size="lg">Call us today</Button> */}
                </Stack>
            </VStack>
          
           
        </Box>
    );
};

export default HeroSection;
