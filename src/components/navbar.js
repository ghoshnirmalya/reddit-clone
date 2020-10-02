import { Box, Container, Flex } from "@chakra-ui/core";
import React from "react";
import AddNewPost from "./add-new-post";

const Navbar = () => {
  return (
    <Box position="sticky" top={0} p={4} bg="gray.100" zIndex={1}>
      <Container maxW="md" centerContent>
        <Flex justifyContent="flex-end" w="100%" position="sticky" top={0}>
          <AddNewPost />
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
