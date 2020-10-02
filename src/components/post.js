import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/core";
import React from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Post = ({ post }) => {
  return (
    <HStack key={post.id} w="100%" alignItems="flex-start">
      <VStack>
        <IconButton
          size="lg"
          colorScheme="purple"
          aria-label="Upvote"
          icon={<FiArrowUp />}
        />
        <Text bg="gray.100" rounded="md" w="100%" p={1}>
          {post.upvotes}
        </Text>
      </VStack>
      <VStack>
        <IconButton
          size="lg"
          colorScheme="yellow"
          aria-label="Downvote"
          icon={<FiArrowDown />}
        />
        <Text bg="gray.100" rounded="md" w="100%" p={1}>
          {post.downvotes}
        </Text>
      </VStack>
      <Box bg="gray.100" p={4} rounded="md" w="100%">
        <Text>{post.title}</Text>
      </Box>
    </HStack>
  );
};

export default Post;
