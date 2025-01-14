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
import { UserService } from "../../../../Service/UserService";
const DeleteForm = ({ getAllUser, userId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteUser = async () => {
    try {
      await UserService.deleteUser(userId);
      getAllUser();
      onClose();
      notification.success({ message: "Xóa người dụng thành công" });
    } catch (error) {
      notification.error({ message: "Xóa người dùng thất bại" });
    }
  };
  return (
    <>
      <a onClick={onOpen}>Delete</a>
      <Modal onClose={onClose} isOpen={isOpen} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          {userId && <ModalHeader>Có chắc muốn xóa tài khoản {userId} không ?</ModalHeader>}
          <ModalCloseButton />
          <ModalFooter>
            <Button onClick={deleteUser} colorScheme="blue" mr={3}>
              Có
            </Button>
            <Button onClick={onClose}>Không</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteForm;
