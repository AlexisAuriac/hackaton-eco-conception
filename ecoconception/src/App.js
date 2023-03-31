import * as React from "react";
import { ChakraProvider, HStack, Text, VStack } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <VStack w="100%" align="start">
        <HStack>
          <VStack w="100%" align="start" bg="#F5EFEA">
            <Text>Le chef</Text>
            <Text>
              Philippe Lugnac s’amuse autant à inventer qu’à réinventer, faire
              briller le répertoire classique parisien, visiter de nouvelles
              terres avec attention et donner de l’éclat aux soirées festives
              qui se prolongent.
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
