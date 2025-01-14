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
import { hotelServices } from "../../../../Service/HotelService";
const DeleteHotelForm = ({ getAllHotel, hotelId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteHotel = async () => {
    try {
      await hotelServices.deleteHotel(hotelId);
      getAllHotel();
      onClose();
      notification.success({ message: "Xóa khách sạn thành công" });
    } catch (error) {
      notification.error({ message: "Xóa khách sạn thất bại" });
    }
  };
  return (
    <>
      <a onClick={onOpen}>Delete</a>
      <Modal onClose={onClose} isOpen={isOpen} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          {hotelId && <ModalHeader>Có chắc muốn xóa khách sạn {hotelId} không ?</ModalHeader>}
          <ModalCloseButton />
          <ModalFooter>
            <Button onClick={deleteHotel} colorScheme="blue" mr={3}>
              Có
            </Button>
            <Button onClick={onClose}>Không</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteHotelForm;
