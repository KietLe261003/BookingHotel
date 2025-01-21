import React from "react";

const CreateComment = () => {
  return (
    <div
      className="bg-white mb-3 flex justify-center"
    >
      <div class=" px-7 w-[700px] rounded-[12px] bg-white p-4 shadow-md border">
        <p class="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
          Add Comment
        </p>
        <textarea
          class="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"
          placeholder="Add your comments here"
        ></textarea>

        <div class="flex justify-between mt-2">
          <p class="text-sm text-blue-900 ">Enter atleast 15 characters</p>
          <button class="h-12 w-[150px] bg-blue-400 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600">
            Submit comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
