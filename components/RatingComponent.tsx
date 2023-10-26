import React from "react";

const RatingComponent = () => {
  return (
    <div className="inline-block opacity-100">
      <input
        type="radio"
        id="star5"
        name="rating"
        value="5"
        className="hidden opacity-100"
      />
      <label
        htmlFor="star5"
        className="float-right cursor-pointer text-gray-400 transition-color duration-300 before:content-['\2605'] before:text-2xl"
      ></label>
      <input
        type="radio"
        id="star4"
        name="rating"
        value="4"
        className="hidden opacity-100"
      />
      <label
        htmlFor="star4"
        className="float-right cursor-pointer text-gray-400 transition-color duration-300 before:content-['\2605'] before:text-2xl"
      ></label>
      <input
        type="radio"
        id="star3"
        name="rating"
        value="3"
        className="hidden opacity-100"
      />
      <label
        htmlFor="star3"
        className="float-right cursor-pointer text-gray-400 transition-color duration-300 before:content-['\2605'] before:text-2xl"
      ></label>
      <input
        type="radio"
        id="star2"
        name="rating"
        value="2"
        className="hidden opacity-100"
      />
      <label
        htmlFor="star2"
        className="float-right cursor-pointer text-gray-400 transition-color duration-300 before:content-['\2605'] before:text-2xl"
      ></label>
      <input
        type="radio"
        id="star1"
        name="rating"
        value="1"
        className="hidden opacity-100"
      />
      <label
        htmlFor="star1"
        className="float-right cursor-pointer text-gray-400 transition-color duration-300 before:content-['\2605'] before:text-2xl hover:text-yellow-400"
      ></label>

      <style>
        {`
          input:hover ~ label,
          input:checked ~ label {
            color: #ffc300 !important;
          }
        `}
      </style>
    </div>
  );
};

export default RatingComponent;
