import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = () => {
    console.log("home: history");
    history.push("/");
  };
  const onClickAbout = () => {
    console.log("about: history");
    history.push("/about")
  };
  const onClickContact = () => {
    console.log("contact: history");
    history.push("/contact")
  };

  return (
    <>
      <Flex
        as="nav"
        bg="teal.400"
        color="white"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5}}
      >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg"}}>
            TODOアプリ
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm"  display={{ base: "none", md: "flex"}}>
          <Box pr={4}>
            <Link onClick={onClickAbout}>ABOUT</Link>
          </Box>
          <Link onClick={onClickContact}>CONTACT</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen}/>
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickAbout={onClickAbout} onClickContact={onClickContact} />
    </>
  )
})
