import React from "react";

const TestimonailCard = ({ image, name, testimonial }) => {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:block">
      <img src={image} className="w-16 -mt-14" alt="" />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-sm text-darkGrayishBlue">{testimonial}</p>
    </div>
  );
};

export default TestimonailCard;
