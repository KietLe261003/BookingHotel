import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { notification } from "antd";
import { UserService } from "../../../../Service/UserService";
import { blogService } from "../../../../Service/BlogService";
const validationSchema = Yup.object({
  title: Yup.string().required("Tiêu đề bài viết*"),
  content: Yup.string().required("Nội dung bài viết*"),
});
const CreateBlog = ({getAll}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const createBlog = async(infoBlog)=>{
    try {
        const userInfo=await UserService.findUserByToken();
        const data={...infoBlog,author: userInfo.data.userId}
        await blogService.createBlog(data);
        onClose();
        notification.success({message: "Đăng bài thành công"});
        getAll();
    } catch (error) {
        notification.error({message: "Lỗi thêm blog"})
    }
  }
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      tags: [""],
      images: [],
    },
    validationSchema,
    onSubmit: (values) => {
      createBlog(values);
    },
  });
  return (
    <div className="flex justify-end">
      <Button colorScheme="teal" onClick={onOpen}>
        Đăng bài viết
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} size={'3xl'} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Đăng bài viết cá nhân </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="block text-base font-medium">
                  Tiêu đề bài viết
                </label>
                <input
                  type="text"
                  id="name"
                  {...formik.getFieldProps("title")}
                  className="w-full border p-2 rounded"
                />
                {formik.touched.title && formik.errors.title && (
                  <p className="text-red-500">{formik.errors.title}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="block text-base font-medium">
                  Hotel amenities (Tiện tích)
                </label>
                <div className="flex gap-3">
                  <input
                    name="amenities"
                    className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                    required
                    onChange={(e) =>
                      formik.setFieldValue("newTag", e.target.value)
                    }
                  />
                  <Button
                    onClick={() => {
                      const newTag = formik.values.newTag?.trim();
                      if (newTag) {
                        formik.setFieldValue("tags", [
                          ...formik.values.tags,
                          newTag,
                        ]);
                        formik.setFieldValue("newTag", "");
                      }
                    }}
                  >
                    Thêm
                  </Button>
                </div>
                <div className="mt-2">
                  {formik.values.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <p>{tag}</p>
                      <p
                        size="small"
                        className="text-red-500 hover:cursor-pointer"
                        onClick={() => {
                          const updatedAmenities = formik.values.tags.filter(
                            (_, i) => i !== index
                          );
                          formik.setFieldValue("tags", updatedAmenities);
                        }}
                      >
                        Xóa
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="block text-base font-medium">
                  Nội dung bài viết
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    licenseKey: "GPL",
                    toolbar: {
                      items: [
                        "undo",
                        "redo",
                        "|",
                        "heading",
                        "|",
                        "fontSize",
                        "fontColor",
                        "fontBackgroundColor",
                        "|",
                        "bold",
                        "italic",
                        "strikethrough",
                        "subscript",
                        "superscript",
                        "code",
                        "-",
                        "|",
                        "alignment",
                        "link",
                        "imageUpload",
                        "blockQuote",
                        "codeBlock",
                        "|",
                        "bulletedList",
                        "numberedList",
                        "todoList",
                        "outdent",
                        "indent",
                      ],
                    },
                    placeholder: "Nội dung bài viết",
                    initialData: "Hãy nhập nội dung bài viết vào đây",
                  }}
                  onChange={(event, editor) => {
                    console.log(event);
                    formik.setFieldValue("content",editor.getData());
                  }}
                />
                {formik.touched.content && formik.errors.content && (
                  <p className="text-red-500">{formik.errors.content}</p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="imageUrls"
                  className="block text-base font-medium"
                >
                  Hình ảnh bài viết
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
            <Button colorScheme='blue'onClick={() => formik.handleSubmit()}>Save</Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateBlog;
