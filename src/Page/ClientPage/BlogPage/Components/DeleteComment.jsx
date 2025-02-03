import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { notification } from "antd";
import { blogService } from "../../../../Service/BlogService";
const DeleteComment = ({ blogId, commentId, getAll }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteComment = async () => {
    try {
        await blogService.deleteComment(blogId,commentId);
        getAll();
        onClose();
        notification.success({message: "Xóa thành công"});
    } catch (error) {
        notification.error({message: "Xóa thất bại"})
    }
  };
  return (
    <>
      <a className="h-full w-full" onClick={onOpen}>Xóa</a>
      <Modal onClose={onClose} isOpen={isOpen} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          {blogId && (
            <ModalHeader>Có chắc muốn xóa comment này không ?</ModalHeader>
          )}
          <ModalCloseButton />
          <ModalFooter>
            <Button onClick={deleteComment} colorScheme="blue" mr={3}>
              Có
            </Button>
            <Button onClick={onClose}>Không</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteComment;
