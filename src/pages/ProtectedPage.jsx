import { Container, Text, VStack } from "@chakra-ui/react";

const ProtectedPage = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Protected Page</Text>
        <Text fontSize="xl">This page is only accessible to authenticated users.</Text>
      </VStack>
    </Container>
  );
};

export default ProtectedPage;