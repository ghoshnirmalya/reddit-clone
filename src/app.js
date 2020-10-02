import { Container, Flex, Spinner, VStack } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import AddNewPost from "./components/add-new-post";
import Post from "./components/post";
import db from "./lib/firebase";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Hook to handle the initial fetching of posts

    db.collection("posts")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Hook to handle the real-time updating of posts whenever there is a
    // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

    db.collection("posts").onSnapshot((querySnapshot) => {
      const _posts = [];

      querySnapshot.forEach((doc) => {
        _posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setPosts(_posts);
    });
  }, []);

  if (isLoading) {
    return (
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <Spinner />
      </Flex>
    );
  }

  return (
    <Container maxW="md" centerContent p={8}>
      <VStack spacing={8} w="100%">
        <Flex justifyContent="flex-end" w="100%">
          <AddNewPost />
        </Flex>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </VStack>
    </Container>
  );
};

export default App;
