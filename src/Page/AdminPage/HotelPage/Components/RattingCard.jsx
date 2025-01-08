const RatingCard = ({ name, description, profilePic, rating }) => {
    return (
      <div className="flex bg-gray-200 items-center max-h-auto max-w-auto mt-10 pl-0 mx-12 pr-6 shadow-xl rounded-l-full rounded-r-xl overflow-hidden">
        <div className="flex items-center w-full">
          <img
            className="w-20 h-20 rounded-full border-8 border-gray-400 mr-4 "
            src={profilePic}
            alt={`${name}'s Profile Picture`}
          />
          <div className="space-y-1 py-2">
            <h2 className="text-xl text-left font-semibold text-gray-800">{name}</h2>
            <p className="text-xs text-gray-500 sm:text-sm md:text-base">{description}</p>
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ms-1 ${
                      index < rating
                        ? "text-yellow-300"
                        : "text-gray-300 dark:text-gray-500"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default RatingCard;