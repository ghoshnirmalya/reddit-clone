import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/core";
import React, { useState } from "react";
import db from "../lib/firebase";

const AddNewPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    await db.collection("posts").add({
      title,
      upvotes: 0,
      downvotes: 0,
    });

    onClose();
    setTitle("");
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Add new post
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Add new post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl id="post-title">
                <FormLabel>Post title</FormLabel>
                <Input
                  type="post-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleSubmit}>Save</Button>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default AddNewPost;
