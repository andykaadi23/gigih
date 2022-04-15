import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/searchBar/searchBar";

import TrackList from "../../components/trackList";
import TrackStructure from "../../components/Track/trackStructure";
import Navbar from "../../components/navbar/navbar";
import { storeTrackList } from "../../store/trackListSlice";
import {
  getSearchTracks,
  createNewPlaylist,
  storeTracksToNewPlaylist,
} from "../../authorization/spotify";
import {
  Flex,
  Heading,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

export default function CreatePlaylist() {
  const token = useSelector((state) => state.user.accessToken);
  const userID = useSelector((state) => state.user.data.id);
  const tracks = useSelector((state) => state.tracks.tracksList);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTracks, setSelectedTracks] = useState([]);

  const [postPlaylist, setPostPlaylist] = useState({
    name: "",
    description: "",
    public: false,
    collaborative: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostPlaylist({ ...postPlaylist, [name]: value });
  };

  const { isOpen, onOpen, onClose } = useDisclosure;
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const buttonHandleSearch = () => {
    setIsLoading(true);
    if (search === "") {
      alert("Search Cannot Be Empty");
    } else {
      getSearchTracks(search, token).then((data) => {
        dispatch(storeTrackList(data.tracks.items));
        setIsLoading(false);
      });
      setSearch("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedTracks.length <= 0) {
      alert("You have to selected song first");
    } else {
      createNewPlaylist(userID, token, postPlaylist).then((newPlaylist) =>
        storeTracksToNewPlaylist(newPlaylist.id, token, selectedTracks).then(
          (data) => console.log(data)
        )
      );

      alert("Create New Playlist Has Been Successfully");

      setPostPlaylist({
        name: "",
        description: "",
      });
      setSelectedTracks([]);
    }
  };

  return (
    <>
      <Navbar />
      <Flex width="100vw" height="100vh" flexDir="column">
        <Flex p="10" flexDir="column">
          <Heading as="h4" size="md">
            Search
          </Heading>
          <Flex
            flexDir="row"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <SearchBar
              search={search}
              setSearch={setSearch}
              buttonHandleSearch={buttonHandleSearch}
            />
            <Button width={200} alignSelf="flex-end" onClick={onOpen}>
              Create Playlist
            </Button>
          </Flex>
        </Flex>

        <Box pl="10" pr="10">
          {isLoading ? (
            <div>
              <TrackStructure />
              <TrackStructure />
              <TrackStructure />
              <TrackStructure />
              <TrackStructure />
            </div>
          ) : (
            <TrackList
              tracks={tracks}
              selectedTracks={selectedTracks}
              setSelectedTracks={setSelectedTracks}
            />
          )}
        </Box>
      </Flex>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <form onSubmit={handleFormSubmit}>
          <ModalContent>
            <ModalHeader>Create Playlist</ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Playlist Name</FormLabel>
                <Input
                  ref={initialRef}
                  id="name"
                  name="name"
                  type="text"
                  minLength="10"
                  value={postPlaylist.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  id="description"
                  name="description"
                  minLength="20"
                  value={postPlaylist.description}
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="green"
                mr={3}
                onClick={onClose}
              >
                Create New Playlist
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
