import { Container,Text, Heading, Box } from "@chakra-ui/react";

export default function Packages() {
    return (
        <>
            <Box>
                <Container>
                    <Heading>Our Packages</Heading>
                    <Text>We have various packages to suit your needs</Text>
                    {/* Add your packages here */}
                    <Text>Standard Package</Text>
                    <Text>Premium Package</Text>
                    <Text>Deluxe Package</Text>
                </Container>
        </Box>
        </>
    )
}