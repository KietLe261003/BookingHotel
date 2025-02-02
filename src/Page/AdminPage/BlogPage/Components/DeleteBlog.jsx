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
import { blogService } from "../../../../Service/BlogService";
const DeleteBlog = ({blogId,getAllBlog}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteBlog = async () => {
    try {
        await blogService.deleteBlog(blogId);
        notification.success({message: "Xóa thành công"});
        getAllBlog();
    } catch (error) {
        notification.error({message: "Xóa thất bại"})
    }
  };
  return (
    <>
      <a onClick={onOpen}>Delete</a>
      <Modal onClose={onClose} isOpen={isOpen} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          {blogId && (
            <ModalHeader>
              Có chắc muốn xóa blog {blogId} không ?
            </ModalHeader>
          )}
          <ModalCloseButton />
          <ModalFooter>
            <Button onClick={deleteBlog} colorScheme="blue" mr={3}>
              Có
            </Button>
            <Button onClick={onClose}>Không</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteBlog;
