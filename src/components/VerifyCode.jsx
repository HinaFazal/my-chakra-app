import { Box, Heading, Input, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function VerifyCode() {
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
      <Heading mb={6}>Verify Code</Heading>
      <Stack spacing={4}>
        <Input placeholder="Enter verification code" />
        <Button colorScheme="blue" onClick={() => navigate("/reset-password")}>
          Verify
        </Button>
      </Stack>
    </Box>
  );
}

export default VerifyCode;
