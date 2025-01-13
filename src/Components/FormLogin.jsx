import {  useDisclosure } from "@chakra-ui/react";
import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "../Comomon/Context/AuthContext";
const FormLogin = () => {
  const {login}=useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      login(values);
      onClose();
    },
  });
  return (
    <>
      <Link
        className="nav-item nav-link"
        onClick={onOpen}
        style={{ fontWeight: "bold" }}
      >
        Login
      </Link>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent className="p-3">
          <ModalCloseButton />
          <ModalBody>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                className="mx-auto h-10 w-auto"
                src="https://www.svgrepo.com/show/301692/login.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
                Or{" "}
                <a
                  href="#"
                  className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  create a new account
                </a>
              </p>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="user@example.com"
                          {...formik.getFieldProps("email")}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <p className="text-red-500 text-sm">
                            {formik.errors.email}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-6">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-5 text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1 rounded-md shadow-sm">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          {...formik.getFieldProps("password")}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <p className="text-red-500 text-sm">
                            {formik.errors.password}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember_me"
                          name="remember"
                          type="checkbox"
                          value="1"
                          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                        <label
                          htmlFor="remember_me"
                          className="ml-2 block text-sm leading-5 text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm leading-5">
                        <a
                          href="#"
                          className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div className="mt-6">
                      <span className="block w-full rounded-md shadow-sm">
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                          Sign in
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormLogin;
