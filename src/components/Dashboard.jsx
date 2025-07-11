import { Box, Heading } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box ml="200px" p={6} w="100%">
        <Heading>Welcome to the Admin Dashboard 👩‍💻</Heading>
        <p>This is your main dashboard area.</p>
      </Box>
    </Box>
  );
}

export default Dashboard;
