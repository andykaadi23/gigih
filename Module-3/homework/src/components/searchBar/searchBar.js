import React from "react";
import { Flex, Button, Text, Input, InputGroup } from "@chakra-ui/react";

export default function SearchBar({ search, setSearch, searchHandle }) {
  return (
    <Flex flexDir="column">
      <Text mt={3} mb={2}>
        Find something
      </Text>
      <InputGroup>
        <Input
          id="input-search"
          placeholder="Search.."
          size="md"
          variant="filled"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          mr="5"
        />
        <Button id="btn-search" onClick={searchHandle} size="md" width="150px">
          Search
        </Button>
      </InputGroup>
    </Flex>
  );
}
