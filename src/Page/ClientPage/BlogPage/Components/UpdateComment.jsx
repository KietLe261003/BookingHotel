import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  useDisclosure,
  ModalBody,
} from "@chakra-ui/react";
import { notification } from "antd";
import { blogService } from "../../../../Service/BlogService";
const UpdateComment = ({ blogId, commentId, content, getAll }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [contentComment,setContentComment]=useState(content || "");
  const updateComment = async ()=>{
    try {
        const data = {
            blogId,
            commentId,
            comment: contentComment
        }
        await blogService.updateComment(data);
        onClose();
        getAll();
        notification.success({message: "Chỉnh sửa bình luận thành công"});
    } catch (error) {
        notification.error({message: "Lỗi chỉnh sửa bình luận"})
    }
  }
  return (
    <>
      <a className="h-full w-full" onClick={onOpen}>
        Sửa
      </a>
      <Modal onClose={onClose} isOpen={isOpen} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chỉnh sửa nội dung bình luận</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
                <textarea
                  class="h-40 px-3 text-sm py-1 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"
                  placeholder="Add your comments here"
                  value={contentComment}
                  onChange={(e) => {
                    e.target.value.length <= 100 &&
                      setContentComment(e.target.value);
                  }}
                ></textarea>
                <div class="flex justify-between mt-2">
                  <p class="text-sm text-blue-900 ">
                    Enter atleast 100 characters
                  </p>
                </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={updateComment} colorScheme="blue" mr={3}>
              Có
            </Button>
            <Button onClick={onClose}>Không</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateComment;
