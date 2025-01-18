import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "antd";
import { useFormik } from "formik/dist";
import React from "react";
import * as Yup from "yup";
import { iconsService } from "../../../../Comomon/Icons/IconService";
const validationSchema = Yup.object({
  roomName: Yup.string().required("Room name is required"),
  roomType: Yup.string().required("Room type is required"),
  description: Yup.string().required("Description is required"),
  pricePerNight: Yup.number()
    .min(0, "pricePerNight must be a positive number")
    .required("pricePerNight is required"),
  maxOccupancy: Yup.number()
    .required("Max Occupancy is required"),
  totalRoom: Yup.number()
    .required("totalRoom is required"),
});
const CreateRoomForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      roomName: "",
      roomType: "",
      description: "",
      pricePerNight: 0,
      maxOccupancy: 1,
      totalRoom: 1,
      amenities: [],
      images: [],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex justify-end">
      <Button className="bg-blue-500" onClick={onOpen}>
        Tạo Phòng
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        size={'3xl'}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tạo một loại phòng mới</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="max-h-[800px] overflow-y-auto">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="block text-base font-medium">
                  Room Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...formik.getFieldProps("roomName")}
                  className="w-full border p-2 rounded"
                />
                {formik.touched.roomName && formik.errors.roomName && (
                  <p className="text-red-500">{formik.errors.roomName}</p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="roomType"
                  className="block text-base font-medium"
                >
                  Room Type
                </label>
                <input
                  type="text"
                  id="roomType"
                  {...formik.getFieldProps("roomType")}
                  className="w-full border p-2 rounded"
                />
                {formik.touched.roomType && formik.errors.roomType && (
                  <p className="text-red-500">{formik.errors.roomType}</p>
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
                <label htmlFor="pricePerNight" className="block text-base font-medium">
                  Price
                </label>
                <input
                  type="number"
                  id="pricePerNight"
                  {...formik.getFieldProps("pricePerNight")}
                  className="w-full border p-2 rounded"
                />
                {formik.touched.pricePerNight && formik.errors.pricePerNight && (
                  <p className="text-red-500">{formik.errors.pricePerNight}</p>
                )}
              </div>
              <div className="mb-3 flex gap-3">
                <div className="w-full">
                  <label
                    htmlFor="maxOccupancy"
                    className="block text-base font-medium"
                  >
                    Sức chứa 
                  </label>
                  <input
                    type="text"
                    id="maxOccupancy"
                    {...formik.getFieldProps("maxOccupancy")}
                    className="w-full border p-2 rounded"
                  />
                  {formik.touched.maxOccupancy && formik.errors.maxOccupancy && (
                    <p className="text-red-500">{formik.errors.maxOccupancy}</p>
                  )}
                </div>

                <div className="w-full">
                  <label
                    htmlFor="totalRoom"
                    className="block text-base font-medium"
                  >
                    totalRoom
                  </label>
                  <input
                    type="totalRoom"
                    id="totalRoom"
                    {...formik.getFieldProps("totalRoom")}
                    className="w-full border p-2 rounded"
                  />
                  {formik.touched.totalRoom && formik.errors.totalRoom && (
                    <p className="text-red-500">{formik.errors.totalRoom}</p>
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
          <ModalFooter className="gap-3">
            <Button onClick={() => formik.handleSubmit()} variant="ghost" className="bg-blue-500 font-medium">
              Save
            </Button>
            <Button
              colorScheme="blue"
              className="font-medium"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateRoomForm;
