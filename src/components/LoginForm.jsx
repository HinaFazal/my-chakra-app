import { Box, Input, Button, Heading, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  return (
    <Box
      p={6}
      maxW="400px"
      mx="auto"
      mt="100px"
      borderWidth={1}
      borderRadius="lg"
    >
      <Heading mb={6} textAlign="center">
        Login
      </Heading>

      <Stack spacing={4}>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button
          colorScheme="blue"
          width="100%"
          onClick={() => navigate("/dashboard")}
        >
          Login
        </Button>
        <Button
          variant="link"
          colorScheme="blue"
          onClick={() => navigate("/forgot-password")}
        >
          Forget Password?
        </Button>
      </Stack>
    </Box>
  );
}

export default LoginForm;
