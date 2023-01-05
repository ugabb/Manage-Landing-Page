import { React, useState } from "react";
import TestimonailCard from "./TestimonailCard";

import Anisha from "../../public/img/avatar-anisha.png";
import Richard from "../../public/img/avatar-richard.png";
import Ali from "../../public/img/avatar-ali.png";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Testimonials = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      {/* container */}
      <div className="max-w-6xl px-6 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <TestimonailCard
            image={Anisha}
            name="Anisha Li"
            testimonial="“Manage has supercharged our team's workflow. The ability to
                    maintain visibility on larger milestones at all times keeps
                    everyone motivated.”"
          />

          {width >= 768 && (
            <TestimonailCard
              image={Ali}
              name="Ali Bravo"
              testimonial="“We have been able to cancel so many other subscriptions since
            using Manage. There is no more cross-channel confusion and
            everyone is much more focused.”"
            />
          )}

          {width >= 768 && (
            <TestimonailCard
              image={Richard}
              name="Richard Watt"
              testimonial="“Manage has supercharged our team's workflow. The ability to
                    maintain visibility on larger milestones at all times keeps
                    everyone motivated.”"
            />
          )}
        </div>

        {/* Button */}
        <div className="flex justify-center align-center">
          <a
            href=""
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight transition delay-150 md:w-35 md:mt-10"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
