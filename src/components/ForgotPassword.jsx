import { Box, Heading, Input, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
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
        Forget Password
      </Heading>

      <Stack spacing={4}>
        <Input placeholder="Enter your email" />
        <Button
          colorScheme="blue"
          width="100%"
          onClick={() => navigate("/verify-code")}
        >
          Send Code
        </Button>
      </Stack>
    </Box>
  );
}

export default ForgotPassword;
