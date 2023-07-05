import { ChakraProvider } from '@chakra-ui/react';

export const Chakra = ({ children }) => (
  <ChakraProvider>
    {children}
  </ChakraProvider>
);

