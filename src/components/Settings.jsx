import { Box, Heading, Text } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

function Settings() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box ml="200px" p={6} w="100%">
        <Heading mb={4}>Settings</Heading>
        <Text>Settings options will go here.</Text>
      </Box>
    </Box>
  );
}

export default Settings;
