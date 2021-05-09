import { Button } from "@chakra-ui/button";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { memo, VFC } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickAbout: () => void;
  onClickContact: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickAbout, onClickContact } = props;

  return (
    <Drawer
      placement="left"
      size="xs"
      onClose={onClose}
      isOpen={isOpen}
    >
      <DrawerOverlay>
        <DrawerContent bg="gray.100">
          <DrawerCloseButton />
          <DrawerHeader>TODOアプリ</DrawerHeader>
          <DrawerBody p={0}>
            <Button w="100%" mb={2} onClick={onClickHome} onClose={onClose}>TOP</Button>
            <Button w="100%" mb={2} onClick={onClickAbout}>ABOUT</Button>
            <Button w="100%" mb={2} onClick={onClickContact}>CONTACT</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})
