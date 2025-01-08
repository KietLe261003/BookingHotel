import React from "react";
import * as Yup from "yup";
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
import { useFormik } from "formik";
import { renderPrice } from "../../../../Until/RenderPrice";
import { bookingService } from "../../../../Service/BookingService";
import { useNavigate } from "react-router-dom";
const BookingForm = ({ room }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .required("Phone number is required"),
    dateCheckin: Yup.date().required("Check-in date is required"),
    dateCheckout: Yup.date()
      .min(
        Yup.ref("dateCheckin"),
        "Check-out date must be after check-in date"
      )
      .required("Check-out date is required")
      .test(
        "is-at-least-one-day",
        "Ngày trả phòng phải lớn hơn ngày nhận phòng",
        function (value) {
          const { dateCheckin } = this.parent;
          if (!dateCheckin || !value) return true; // Skip validation if either date is missing
          const checkinDate = new Date(dateCheckin);
          const checkoutDate = new Date(value);
          return checkoutDate > checkinDate; // Ensure at least one day gap
        }
      ),
    roomAmount: Yup.number()
      .min(1, "Room amount must be at least 1")
      .required("Room amount is required"),
    peopleAmount: Yup.number()
      .min(1, "Number of people must be at least 1")
      .required("Number of people is required"),
  });
  const createBooking = async(data)=>{
    try {
      const res = await bookingService.createBooking(data);
      window.location.href=res?.data;
    } catch (error) {
      alert("Đăng ký thất bại");
      console.log("Lỗi",error);
    }
  }
  const formik = useFormik({
    initialValues: {
      userId: 1,
      roomId: room.roomId,
      name: "",
      email: "",
      phoneNumber: "",
      dateCheckin: "",
      dateCheckout: "",
      roomAmount: 1,
      peopleAmount: 2,
      note: "",
      price: room.pricePerNight,
    },
    validationSchema,
    onSubmit: (values) => {
      const valu={...values,price: values.price*values.roomAmount};
      createBooking(valu);
    },
  });
  return (
    <div>
      <div className="action">
        <button type="button" onClick={onOpen}>
          Đặt phòng ngay
        </button>
      </div>
      <Modal
        blockScrollOnMount={true}
        scrollBehavior={"inside"}
        isOpen={isOpen}
        size={"2xl"}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
              Book an Hotel
            </div>
          </ModalHeader>
          <ModalBody>
            <form className="py-4 px-6" onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  {...formik.getFieldProps("phoneNumber")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <p className="text-red-500 text-sm">{formik.errors.phoneNumber}</p>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="date"
                >
                  Date Start
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                  placeholder="Select a date"
                  required
                  {...formik.getFieldProps("dateCheckin")}
                />
                {formik.touched.dateCheckin && formik.errors.dateCheckin ? (
                  <p className="text-red-500 text-sm">{formik.errors.dateCheckin}</p>
                ) : null}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="date"
                >
                  Date End
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                  placeholder="Select a date"
                  required
                  {...formik.getFieldProps("dateCheckout")}
                />
                {formik.touched.dateCheckout && formik.errors.dateCheckout ? (
                  <p className="text-red-500 text-sm">{formik.errors.dateCheckout}</p>
                ) : null}
              </div>
              <div className="flex justify-between gap-3">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phone"
                  >
                    Số lượng
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="roomAmount"
                    type="tel"
                    placeholder="Số lượng phòng muốn đặt"
                    {...formik.getFieldProps("roomAmount")}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="phone"
                  >
                    Số người
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="peopleAmount"
                    type="tel"
                    placeholder="Số người check in"
                    {...formik.getFieldProps("peopleAmount")}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="service"
                >
                  Loại phòng
                </label>
                {room && (
                  <input
                    className="shadow appearance-none border rounded w-full disabled: py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="service"
                    name="service"
                    disabled
                    value={room.roomType}
                  />
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="message"
                >
                  Ghi chú
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Nếu có yêu cầu gì thêm vui lòng note vào đây"
                  {...formik.getFieldProps("note")}
                ></textarea>
              </div>
              <div className="flex justify-between">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="message"
                >
                  Tổng tiền
                </label>
                <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                 {renderPrice(room.pricePerNight * formik.values.roomAmount)}
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <div className="flex items-center justify-center mb-4">
              <button
                onClick={() => {
                  formik.handleSubmit();
                }}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-800 focus:outline-none focus:shadow-outline mr-3"
                type="button"
              >
                Book Appointment
              </button>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  );
};

export default BookingForm;
