import { Box, Heading, Input, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
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
        Reset Password
      </Heading>

      <Stack spacing={4}>
        <Input placeholder="New password" type="password" />
        <Input placeholder="Confirm new password" type="password" />
        <Button colorScheme="green" onClick={() => navigate("/")}>
          Reset Password
        </Button>
      </Stack>
    </Box>
  );
}

export default ResetPassword;
