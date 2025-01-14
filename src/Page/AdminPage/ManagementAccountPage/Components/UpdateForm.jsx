import React, { useEffect, useState } from "react";
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
import { notification } from "antd";
import { UserService } from "../../../../Service/UserService";
import { sanitizeUserData } from "../../../../Until/SanitizeUserData";
const validationSchema = Yup.object({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be digits only")
    .required("Phone number is required"),
});
const UpdateForm = ({ getAllUser, userId }) => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: true,
    address: "",
    dateOfBirth: "",
    role: "user",
    accountStatus: "Active",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  const updateUser = async (data) => {
    try {
      await UserService.updateUser(userId,data);
      notification.success({
        message: "Cập nhật tài khoản người dùng thành công",
      });
      onClose();
      getAllUser();
    } catch (error) {
      notification.error({ message: "Lỗi Cập nhật tài khoản người dùng" });
    }
  };
  const formik = useFormik({
    initialValues: user,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      updateUser(values);
    },
  });
  const getUser = async () => {
    try {
      const res = await UserService.findUserByid(userId);
      let userData = res.data;

      // Xử lý các giá trị null
      userData = sanitizeUserData(userData);

      // Chuyển đổi định dạng ngày, nếu cần
      if (userData.dateOfBirth) {
        userData.dateOfBirth = new Date(userData.dateOfBirth)
          .toISOString()
          .split("T")[0]; // Chuyển thành định dạng YYYY-MM-DD
      }

      setUser(userData);
    } catch (error) {
      notification.error({ message: "Lấy thông tin user thất bại" });
    } finally {
      setIsLoading(false);
    }
  };
  const closeModal = () => {
    setUser({
      fullName: "",
      email: "",
      phoneNumber: "",
      gender: true,
      address: "",
      dateOfBirth: "",
      role: "user",
      accountStatus: "Active",
    });
    onClose();
  };
  useEffect(() => {
    if (userId) getUser();
  }, [userId]);
  return (
    <>
      <a onClick={onOpen}>Edit</a>

      <Modal onClose={closeModal} isOpen={isOpen} size={"2xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cập nhật thông tin tài khoản</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading ? (
              <div className="text-center">
                <p>Loading...</p>
              </div>
            ) : (
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
                    <p className="text-red-500 text-sm">
                      {formik.errors.fullName}
                    </p>
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
                    <p className="text-red-500 text-sm">
                      {formik.errors.email}
                    </p>
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
                    {...formik.getFieldProps("gender")}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="true">Nam</option>
                    <option value="false">Nữ</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your address"
                    {...formik.getFieldProps("address")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date of birth
                  </label>
                  <input
                    type="date"
                    name="Date of birth"
                    id="Date of birth"
                    placeholder="Enter your Date of birth"
                    {...formik.getFieldProps("dateOfBirth")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-3 flex w-full gap-3">
                  <div className="w-full">
                    <label
                      htmlFor="role"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                      {...formik.getFieldProps("role")}
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                      <option value="staff">Staff</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="accountStatus"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Status
                    </label>
                    <select
                      id="accountStatus"
                      name="accountStatus"
                      className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                      {...formik.getFieldProps("accountStatus")}
                      required
                    >
                      <option value="">Select Account Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Banned">Banned</option>
                    </select>
                  </div>
                </div>
              </form>
            )}
            <div>
              <button
                onClick={() => {
                  formik.handleSubmit();
                }}
                className="hover:shadow-htmlForm w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                type="button"
              >
                Cập nhật tài khoản
              </button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateForm;
