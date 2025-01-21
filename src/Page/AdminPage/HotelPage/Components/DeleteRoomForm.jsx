import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { notification } from "antd";
import { roomService } from "../../../../Service/RoomService";
const DeleteRoomForm = ({selectRoom,getAll}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteRoom = async () => {
    try {
      await roomService.deleteRoom(selectRoom.roomId);
      getAll();
      onClose();
      notification.success({ message: "Xóa phòng thành công" });
    } catch (error) {
      notification.error({ message: "Xóa phòng thất bại" });
    }
  };
  return (
    <>
      <a onClick={onOpen}>Delete</a>
      <Modal onClose={onClose} isOpen={isOpen} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          {selectRoom && (
            <ModalHeader>
              Có chắc muốn xóa phòng {selectRoom.roomName} không ?
            </ModalHeader>
          )}
          <ModalCloseButton />
          <ModalFooter>
            <Button onClick={deleteRoom} colorScheme="blue" mr={3}>
              Có
            </Button>
            <Button onClick={onClose}>Không</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteRoomForm;
