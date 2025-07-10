// src/App.jsx
import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <HStack p={8}>
      <Button colorScheme="teal">Click me</Button>
      <Button colorScheme="blue">Click me</Button>
    </HStack>
  );
}

export default App;
