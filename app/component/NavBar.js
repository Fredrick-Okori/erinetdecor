'use client'
import React, { useEffect } from 'react';
import {
    Box, Flex, Text,
    HStack, Link,
    Image
} from '@chakra-ui/react';



import { Facebook, Tiktok, Twitter, Whatsapp } from 'react-bootstrap-icons';

const NavBar = () => {

    return (
        <Box>
            <Box
                position="fixed"
                zIndex={100}
                top={{ base: 0, lg: 15 }}
                left="50%"
                transform="translateX(-50%)"
                bg="var(--clr-primary-3)"
                color="var(--clr-primary-10)"
                width={{ base: "100%", md: "80%", lg: "70%" }}
                maxW="1200px"
                boxShadow="md"
                rounded={{ base: 0, md: 100 }}
                px={4}
             
            >
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    p={4}
                    placeItems='center'
                >
                    <Box display="flex" alignItems="center">
                        <Image src='/logo_horizontal.png' width={120} alt='logo' />
                    </Box>

                    <HStack spacing={5} alignItems="center">
                        
                    </HStack>

                    <Flex gap={2}>
                        <Text>
                            <Tiktok/>
                        </Text>
                        <Text>
                            <Twitter />
                        </Text>

                        <Text>
                            <Whatsapp />
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default NavBar;
