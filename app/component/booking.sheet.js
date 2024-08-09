"use client"
import React, {useEffect} from 'react';
import { Box, SimpleGrid, Container, Heading, Button, Text, Image, Divider } from '@chakra-ui/react';



// BookingCard Component
export default function BookingCard() {
    
    return (
        <>
            <Container maxW="container.xl">
                <Box mt={20}>
                    <SimpleGrid columns={{base: 1, lg: 2}} spacing={10} alignItems='center' data-aos='fade-up' data-aos-duration='2000'
                    >
                        
                        <Box >
                            <Heading mb={5}>Ordinary  Tickets</Heading>
                            <Text></Text>
                            <Text>
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                            </Text>
                            <Heading>

                                <Button variant='outline' colorScheme='whiteAlpha'>Book Now</Button>
                            </Heading>

                        </Box>
                        <Box>
                            <Image rounded={20} src='/all-white-balloon-wedding-arch-balloon-garland-kit-927032.webp' alt='events' />
                        </Box>
                    
                        <Box>
                            <Image rounded={20} src='/pexels-photo-3051573.webp' alt='events' />
                        </Box>
                        <Box >
                            <Heading mb={5}>VIP Tickets</Heading>
                            <Text>
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                            </Text>
                            <Heading>

                                <Button variant='outline' colorScheme='whiteAlpha'>Book Now</Button>
                            </Heading>

                        </Box>
                        <Box >
                            <Heading mb={5}> Table of five.</Heading>
                            <Text>
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                                A 28 room boutique hotel with three tiers of suites each adding an extra layer of comfort. Being a Boutique Hotel, Le Petit Village provides an unprecedented intimate and personalized attention to customers comfort like no other.
                               
                                
                               
                            </Text>
                            <Heading>

                            <Button variant='outline' colorScheme='whiteAlpha'>Book Now</Button>
                            </Heading>

                        </Box>
                        <Box>
                            <Image rounded={20} src='/white-arbors-ot-zjgj-3964-66_600.avif' alt='events' />
                        </Box>

                      
                    </SimpleGrid>
                </Box>

            </Container>


        </>
    );
}
