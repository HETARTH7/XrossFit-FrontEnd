import React from "react";
import {
  Button,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import HomeNav from "./HomeNav";
import Footer from "./Footer";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <HomeNav />
      <Heading color="#fff" fontSize={100}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("HELLO")
              .pauseFor(800)
              .deleteAll()
              .typeString(
                '<strong>Welcome to the<span style="color: #D2001A;"> GYM</span> App</strong>'
              )
              .start();
          }}
        />
      </Heading>
      <>
        <Button mt={20} ref={btnRef} colorScheme="red" onClick={onOpen}>
          About
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>About</DrawerHeader>

            <DrawerBody>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Learn More</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
      <Footer />
    </div>
  );
};

export default Home;
