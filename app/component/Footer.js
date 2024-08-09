import { Box, Container } from "@chakra-ui/react";

export default function Footer() {
    return (

        <Box bg='#f3f3f3' p={10} mt={20}>
            <Container maxW="container.xl" color='black' textAlign='center'>
                &copy; 2024 Erinet Decor & Events. All rights reserved.
            </Container>
        </Box>


    )
}