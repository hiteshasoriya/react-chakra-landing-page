import { Container as ChakraContainer } from '@chakra-ui/react';

export default function Container({ children, ...props }) {
  return (
    <ChakraContainer
      maxW="container.xl"
      px={{ base: 4, sm: 6, lg: 8 }}
      {...props}
    >
      {children}
    </ChakraContainer>
  );
}