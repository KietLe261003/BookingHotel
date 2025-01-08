import React from "react";
import RatingCard from "./RattingCard";

const RatingHotel = () => {
  return (
    <div className=" w-full bg-white p-5 rounded-xl shadow-md sm:p-6 grid grid-cols-1 lg:grid-cols-6 gap-6">
      {/* Review Form */}
      <div className="lg:col-span-4 col-span-1">
        <form action="" method="POST" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Review By Client
          </h2>
          <div className="flex justify-start items-center space-x-1 mb-4">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    id={`${5 - index}-stars`}
                    name="rating"
                    value={5 - index}
                    className="hidden"
                  />
                  <label
                    htmlFor={`${5 - index}-stars`}
                    className="text-yellow-400 text-2xl cursor-pointer hover:scale-110"
                  >
                    ★
                  </label>
                </React.Fragment>
              ))}
          </div>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <RatingCard
              key={index}
                name="Sumit Kapoor"
                description="Lorem ipsum is a dummy or placeholder text commonly used in graphic design."
                profilePic="https://s3.amazonaws.com/media.mixrank.com/profilepic/f7f1c03d77cd5788451a59d0c7eecabd"
                rating={3}
              />
            ))}
        </form>
      </div>

      {/* Rating Breakdown */}
      <div className="lg:col-span-2 hidden lg:flex flex-col space-y-4">
        <div className="flex items-center">
          <span className="text-yellow-400 text-xl">★★★★★</span>
          <p className="ml-2 text-sm font-medium text-gray-900">0 out of 0</p>
        </div>
        <p className="text-sm font-medium text-gray-500">0 global ratings</p>
        {[
          { stars: 5, width: "50%", percentage: "0%" },
          { stars: 4, width: "25%", percentage: "0%" },
          { stars: 3, width: "10%", percentage: "0%" },
          { stars: 2, width: "5%", percentage: "0%" },
          { stars: 1, width: "10%", percentage: "0%" },
        ].map((rating, index) => (
          <div className="flex items-center" key={index}>
            <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">
              {rating.stars} star
            </span>
            <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
              <div
                className="h-4 bg-yellow-400 rounded"
                style={{ width: rating.width }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-500">
              {rating.percentage}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingHotel;
