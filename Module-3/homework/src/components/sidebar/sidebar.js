import React from "react";

import { Flex, Divider, Button, Avatar, Heading, Text } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <div>
      <Flex
        pos="sticky"
        h="100vh"
        w="200px"
        boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
        flexDir="column"
        justifyContent="space-between"
        backgroundColor="orange.300"
      >
        <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
          <Button mt={5}>=</Button>
        </Flex>
        <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
          <Divider />
          <Flex mt={4}>
            <Avatar
              name="Titan Aji"
              src="https://bit.ly/broken-link"
              size="sm"
            />
            <Flex flexDir="column" ml={4}>
              <Heading as="h3" size="sm">
                Nurceha Titan
              </Heading>
              <Text color="gray" size="sm">
                User
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
