import { Inter } from "next/font/google";


import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./component/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Erinet Decor | Events",
    description: "Events Products and services",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <ChakraProvider>
                
                <body>{children}</body>
            </ChakraProvider>


        </html>
    );
}
