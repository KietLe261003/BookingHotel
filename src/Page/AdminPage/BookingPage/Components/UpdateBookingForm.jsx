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
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { bookingService } from "../../../../Service/BookingService";
import { notification } from "antd";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be digits only")
    .required("Phone number is required"),
  note: Yup.string().optional(),
  peopleAmount: Yup.number().min(1, "Must be at least 1").required("Required"),
  roomAmount: Yup.number().min(1, "Must be at least 1").required("Required"),
  price: Yup.number()
    .min(0, "Price must be a positive number")
    .required("Required"),
  dateCheckout: Yup.string().required("Date Check out is required"),
  dateCheckin: Yup.string().required("Date Check in is required"),
});

const UpdateBookingForm = ({ getAll,booking }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const updateBooking = async(data)=>{
        try {
            await bookingService.updateBooking(booking.bookingId,data);
            getAll();
            onClose();
            notification.success({message: "Cập nhật đơn hàng thành công"});
        } catch (error) {
            notification.error({ message: "Cập nhật đơn hàng thất bại" });
        }
    }
  const formik = useFormik({
    initialValues: {
      name: booking?.name || "",
      email: booking?.email || "",
      phoneNumber: booking?.phoneNumber || "",
      note: booking?.note || "",
      peopleAmount: booking?.peopleAmount || 1,
      roomAmount: booking?.roomAmount || 1,
      price: booking?.price || 0,
      dateCheckin: booking?.dateCheckin
        ? new Date(booking.dateCheckin).toISOString().split("T")[0]
        : "",
      dateCheckout: booking?.dateCheckout
        ? new Date(booking.dateCheckout).toISOString().split("T")[0]
        : "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
        console.log(values);
      updateBooking(values);
    },
  });

  return (
    <>
      <a onClick={onOpen}>Edit</a>

      <Modal onClose={onClose} isOpen={isOpen} size={"2xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`Cập nhật thông tin đơn hàng ${booking?.bookingId}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...formik.getFieldProps("name")}
                  className="w-full mt-1 p-2 border rounded"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                  className="w-full mt-1 p-2 border rounded"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="phoneNumber"
                  className="block font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  {...formik.getFieldProps("phoneNumber")}
                  className="w-full mt-1 p-2 border rounded"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.phoneNumber}
                  </p>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="note"
                  className="block font-medium text-gray-700"
                >
                  Note
                </label>
                <textarea
                  id="note"
                  {...formik.getFieldProps("note")}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
            <div className="flex gap-3">
              <div className="mb-3 w-full">
                <label
                  htmlFor="peopleAmount"
                  className="block font-medium text-gray-700"
                >
                  People Amount
                </label>
                <input
                  type="number"
                  id="peopleAmount"
                  {...formik.getFieldProps("peopleAmount")}
                  className="w-full mt-1 p-2 border rounded"
                />
                {formik.touched.peopleAmount && formik.errors.peopleAmount && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.peopleAmount}
                  </p>
                )}
              </div>

              <div className="mb-3 w-full">
                <label
                  htmlFor="roomAmount"
                  className="block font-medium text-gray-700"
                >
                  Room Amount
                </label>
                <input
                  type="number"
                  id="roomAmount"
                  {...formik.getFieldProps("roomAmount")}
                  className="w-full mt-1 p-2 border rounded"
                />
                {formik.touched.roomAmount && formik.errors.roomAmount && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.roomAmount}
                  </p>
                )}
              </div>
            </div>
              <div className="mb-3">
                <label
                  htmlFor="price"
                  className="block font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  {...formik.getFieldProps("price")}
                  className="w-full mt-1 p-2 border rounded"
                />
                {formik.touched.price && formik.errors.price && (
                  <p className="text-red-500 text-sm">{formik.errors.price}</p>
                )}
              </div>
              <div className=" flex gap-3">
                <div className="mb-3 w-full">
                  <label
                    htmlFor="dateCheckin"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date Check In
                  </label>
                  <input
                    type="date"
                    name="Date Check In"
                    id="dateCheckin"
                    placeholder="Enter your Date Check In"
                    {...formik.getFieldProps("dateCheckin")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {formik.touched.dateCheckin &&
                    formik.errors.dateCheckin && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.dateCheckin}
                      </p>
                    )}
                </div>
                <div className="mb-3 w-full">
                  <label
                    htmlFor="dateCheckOut"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date Check Out
                  </label>
                  <input
                    type="date"
                    name="Date Check Out"
                    id="dateCheckOut"
                    placeholder="Enter your Date Check Out"
                    {...formik.getFieldProps("dateCheckout")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  {formik.touched.dateCheckout &&
                    formik.errors.dateCheckout && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.dateCheckout}
                      </p>
                    )}
                </div>
              </div>

              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                mt={4}
                onClick={formik.handleSubmit}
              >
                Update Booking
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateBookingForm;
