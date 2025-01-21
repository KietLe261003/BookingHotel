import { notification } from "antd";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { hotelServices } from "../../../../Service/HotelService";
import { iconsService } from "../../../../Comomon/Icons/IconService";

const validationSchema = Yup.object({
  name: Yup.string().required("Hotel name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .min(0, "Price must be a positive number")
    .required("Price is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be digits only")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const UpdateHotelForm = ({ getAllHotel, hotelId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hotel,setHotel]=useState({
    name: "",
    description: "",
    price: 0,
    address: "",
    city: "",
    phoneNumber: "",
    email: "",
    amenities: [],
    images: [],
    status: ""
  });
  const updateHotel = async (data) => {
    try {
      await hotelServices.updateHotel(hotelId,data);
      notification.success({ message: "Cập nhật khách sạn thành công" });
      onClose();
      getAllHotel();
    } catch (error) {
      notification.error({ message: "Lỗi cập nhật khách sạn" });
    }
  };

  const formik = useFormik({
    initialValues: hotel,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      updateHotel(values);
    },
  });
  const getHotelById = async ()=>{
    try {
      const res = await hotelServices.getHotelById(hotelId);
      setHotel(res?.data);
    } catch (error) {
      notification.error({message: "Lỗi lấy thông tin khách sạn"});
    }
  }
  useEffect(() => {
    if(hotelId)
    getHotelById();
  }, [hotelId]);
  return (
    <>
      <a onClick={onOpen}>Update</a>

      <Modal onClose={onClose} isOpen={isOpen} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cập nhật khách sạn</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="max-h-[800px] overflow-y-auto">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="block text-base font-medium">
                  Hotel Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...formik.getFieldProps("name")}
                  className="w-full border p-2 rounded"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500">{formik.errors.name}</p>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="description"
                  className="block text-base font-medium"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  {...formik.getFieldProps("description")}
                  className="w-full border p-2 rounded"
                ></textarea>
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red-500">{formik.errors.description}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="block text-base font-medium">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  {...formik.getFieldProps("price")}
                  className="w-full border p-2 rounded"
                />
                {formik.touched.price && formik.errors.price && (
                  <p className="text-red-500">{formik.errors.price}</p>
                )}
              </div>
              <div className="mb-3 flex gap-3">
                <div className="w-full">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-base font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    {...formik.getFieldProps("phoneNumber")}
                    className="w-full border p-2 rounded"
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <p className="text-red-500">{formik.errors.phoneNumber}</p>
                  )}
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-base font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                    className="w-full border p-2 rounded"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500">{formik.errors.email}</p>
                  )}
                </div>
              </div>
              <div className="mb-3 flex gap-3">
                <div className="w-full">
                  <label
                    htmlFor="address"
                    className="block text-base font-medium"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...formik.getFieldProps("address")}
                    className="w-full border p-2 rounded"
                  />
                  {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500">{formik.errors.address}</p>
                  )}
                </div>
                <div className="w-2/5">
                  <label htmlFor="city" className="block text-base font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...formik.getFieldProps("city")}
                    className="w-full border p-2 rounded"
                  />
                  {formik.touched.city && formik.errors.city && (
                    <p className="text-red-500">{formik.errors.city}</p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="block text-base font-medium">
                  Hotel amenities (Tiện tích)
                </label>
                <div className="flex gap-3">
                  <select
                    name="amenities"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                    required
                    onChange={(e) =>
                      formik.setFieldValue("newAmenity", e.target.value)
                    }
                  >
                    <option value="">Select amenities</option>
                    {iconsService.map((item) => (
                      <option value={item.key}>{item.key}</option>
                    ))}
                  </select>
                  <Button
                    onClick={() => {
                      const newAmenity = formik.values.newAmenity?.trim();
                      if (newAmenity) {
                        formik.setFieldValue("amenities", [
                          ...formik.values.amenities,
                          newAmenity,
                        ]);
                        formik.setFieldValue("newAmenity", "");
                      }
                    }}
                  >
                    Thêm
                  </Button>
                </div>

                <div className="mt-2">
                  {formik.values.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <p>{amenity}</p>
                      <p
                        size="small"
                        className="text-red-500 hover:cursor-pointer"
                        onClick={() => {
                          const updatedAmenities =
                            formik.values.amenities.filter(
                              (_, i) => i !== index
                            );
                          formik.setFieldValue("amenities", updatedAmenities);
                        }}
                      >
                        Xóa
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="status"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  {...formik.getFieldProps("status")}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Banned">Banned</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="imageUrls"
                  className="block text-base font-medium"
                >
                  Image URLs (comma-separated)
                </label>
                <input
                  type="file"
                  id="imageUrls"
                  multiple
                  onChange={(events) => {
                    const files = events.currentTarget.files;
                    formik.setFieldValue("images", files);
                  }}
                  className="w-full border p-2 rounded"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <div className="w-full">
              <button
                onClick={() => formik.handleSubmit()}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded"
                type="button"
              >
                Cập nhật khách sạn
              </button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateHotelForm;
