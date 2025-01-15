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
import { bookingService } from "../../../../Service/BookingService";
const DeleteBookingForm = ({getAll,booking}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const deleteBooking= async()=>{
        try {
            await bookingService.deleteBooking(booking.bookingId);
            notification.success({message: "Xóa đơn hàng thành công"});
            getAll();
            onClose();
        } catch (error) {
            notification.error({message: "Xóa đơn hàng thất bại"});
        }
    }
  return (
    <>
      <a onClick={onOpen}>Delete</a>
      <Modal onClose={onClose} isOpen={isOpen} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          {booking && (
            <ModalHeader>
              Có chắc muốn xóa đơn hàng {booking.bookingId} không ?
            </ModalHeader>
          )}
          <ModalCloseButton />
          <ModalFooter>
            <Button onClick={deleteBooking} colorScheme="blue" mr={3}>
              Có
            </Button>
            <Button onClick={onClose}>Không</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteBookingForm;
