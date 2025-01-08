import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "antd";
import React from "react";

const CreateRoomForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex justify-end">
      <Button className="bg-blue-500" onClick={onOpen}>Tạo Phòng</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tạo một loại phòng mới</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Content</ModalBody>
          <ModalFooter className="gap-3">
            <Button variant="ghost" className="bg-blue-500 font-medium">Save</Button>
            <Button colorScheme="blue" className="font-medium" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateRoomForm;
