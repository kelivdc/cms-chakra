"use client";
import React from "react";
import styles from "./page.module.css";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";

function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,288L120,256C240,224,480,160,720,128C960,96,1200,96,1320,96L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      <Center position="absolute" top="35vh" left="33%" bg="white" >
        <VStack>
          <Box border="solid 1px #ccc" p="15px" borderRadius="5px" w="md">
            <VStack>
              <Text marginY="10px" variant="h2">
                CMS
              </Text>
              <Input placeholder="Email" />
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button colorScheme="blue">Login</Button>
            </VStack>
          </Box>
          <Text>Forgot password ?</Text>
        </VStack>
      </Center>
    </>
  );
}

export default Login;
