import { VStack, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <VStack
      align="start"
      spacing={4}
      p={4}
      bg="gray.800"
      color="white"
      h="100vh"
      w="200px"
      position="fixed"
    >
      <Button
        variant="ghost"
        colorScheme="whiteAlpha"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </Button>
      <Button
        variant="ghost"
        colorScheme="whiteAlpha"
        onClick={() => navigate("/users")}
      >
        User List
      </Button>
      <Button
        variant="ghost"
        colorScheme="whiteAlpha"
        onClick={() => navigate("/settings")}
      >
        Settings
      </Button>
      <Button variant="outline" colorScheme="red" onClick={() => navigate("/")}>
        Logout
      </Button>
    </VStack>
  );
}

export default Sidebar;
