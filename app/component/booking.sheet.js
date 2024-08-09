"use client"
import React, { useEffect } from 'react';
import { Box, SimpleGrid, Avatar, Container, Flex, Heading, Button, Text, Image, Divider, Badge } from '@chakra-ui/react';
import Flower from './flower.carousel';



// BookingCard Component
export default function BookingCard() {

    return (
        <>
            <Container maxW="container.xl">
                <Box mt={20}>
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems='center' data-aos='fade-up' data-aos-duration='2000'
                    >

                        <Box >
                            <Heading>Flower Boutiquet</Heading>
                            <Text pb={4}>Flowers will speak your feelings</Text>
                     

                            <SimpleGrid columns={{ base: 1, lg: 1 }} spacing={4}>
                                <Box  >

                                    <Flex  alignItems='center' dir='column'>
                                        <Avatar display={{base: "flex", lg: 'none'}} size='2xl' src='/client_large.jpg' />
                                        <Box ml='3'>
                                            <Text fontWeight='bold'>
                                                Small Bouquet
                                               
                                            </Text>
                                            <Text fontSize='sm' mb={3}>UI Engineer</Text>
                                            <Badge rounded={3} variant='solid' p={2} ml='1' colorScheme='pink'>
                                                UGX: 50,000/=
                                            </Badge>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Divider spacing={3} />
                                <Box>

                                    <Flex alignItems='center'>
                                        <Avatar display={{ base: "flex", lg: 'none' }} size='2xl' src='/large_bouquet.webp' />
                                        <Box ml='3'>
                                            <Text fontWeight='bold'>
                                                Medium Bouquet

                                            </Text>
                                            <Text mb={3} fontSize='sm'>UI Engineer</Text>
                                            <Badge variant='solid' p={2} ml='1' colorScheme='pink'>
                                                UGX: 90,000/=
                                            </Badge>
                                        </Box>
                                    </Flex>
                                </Box>
                                <Divider spacing={3} />
                                <Box pb={5}>
                                    <Flex alignItems='center'>
                                        <Avatar display={{ base: "flex", lg: 'none' }} size='2xl' src='/small_bouquet.png' />
                                        <Box ml='3'>
                                            <Text fontWeight='bold'>
                                                Large Bouquet

                                            </Text>
                                            <Text mb={3} fontSize='sm'>UI Engineer</Text>
                                            <Badge variant='solid' p={2} ml='1' colorScheme='pink'>
                                                UGX: 150,000/=
                                            </Badge>
                                        </Box>
                                    </Flex>
                                </Box>
                            </SimpleGrid>


                            <Button variant='outline' color='pink.700' >Order Now</Button>


                        </Box>
                        <Box>
                            <Flower/>
                        </Box>                       
                    </SimpleGrid>
                </Box>

            </Container>


        </>
    );
}
