import { Button, notification } from "antd";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { UserService } from "../../../../Service/UserService";
import * as Yup from "yup";
const validationSchema = Yup.object({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be digits only")
    .required("Phone number is required"),
});

const CreatehtmlForm = ({ getAllUser }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const createUser = async (data) => {
    try {
      await UserService.createUser(data);
      notification.success({ message: "Tạo tài khoản người dùng thành công" });
      onClose();
      getAllUser();
    } catch (error) {
      notification.error({ message: "Lỗi tạo tài khoản người dùng" });
    }
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: true,
      password: "123456",
      role: null,
    },
    validationSchema,
    onSubmit: (values) => {
      createUser(values);
    },
  });
  return (
    <div className="flex justify-end m-3">
      <Button onClick={onOpen} className=" text-right">
        Tạo user
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} size={"2xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tạo tài khoản</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  {...formik.getFieldProps("fullName")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {formik.touched.fullName && formik.errors.fullName ? (
                  <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
                ) : null}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  {...formik.getFieldProps("phoneNumber")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <p className="text-red-500 text-sm">
                    {formik.errors.phoneNumber}
                  </p>
                ) : null}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  {...formik.getFieldProps("email")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="true">Nam</option>
                  <option value="false">Nữ</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
            </form>
            <div>
              <button
                onClick={() => {
                  formik.handleSubmit();
                }}
                className="hover:shadow-htmlForm w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                type="button"
              >
                Tạo tài khoản
              </button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatehtmlForm;
