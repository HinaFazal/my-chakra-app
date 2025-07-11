import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";

function UserList() {
  return (
    <Box display="flex">
      <Sidebar />
      <Box ml="200px" p={6} w="100%">
        <Heading mb={4}>User List</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Ayesha Khan</Td>
              <Td>ayesha@example.com</Td>
              <Td>Active</Td>
            </Tr>
            <Tr>
              <Td>Ali Raza</Td>
              <Td>ali@example.com</Td>
              <Td>Inactive</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default UserList;
