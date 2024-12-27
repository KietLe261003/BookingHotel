import { Button } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/Hooks/Store";
import { setOpenModal } from "@/Redux/Slice";
import { IconCloseModal } from "@/Comomon/Icons/Icons";
const FormLogin = () => {
  const {openModal}=useAppSelector(state=>state.counter);
  const dispath = useAppDispatch();
  const closeModal=()=>{
    dispath(setOpenModal(0));
  }
  return (
    <>
      {openModal === 1 && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
              <button onClick={closeModal} className="absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none">
                <IconCloseModal></IconCloseModal>
              </button>
              <div className="text-center pb-6">
                <h1 className="text-3xl">Contact Us!</h1>

                <p className="text-gray-300">
                  Fill up the form below to send us a message.
                </p>
              </div>

              <form>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                />

                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                />

                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                  name="_subject"
                />

                <textarea
                  className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Type your message here..."
                  name="message"
                  style={{ height: "121px" }}
                ></textarea>

                <div className="flex justify-between">
                  <input
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Send ➤"
                  />
                  <input
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="reset"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormLogin;
