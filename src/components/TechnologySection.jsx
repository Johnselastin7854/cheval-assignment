"use client";
import React, { useEffect, useState } from "react";
import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const TechnologySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowIcons(true);
    }
  }, [inView]);

  return (
    <div className="bg-gray-500/20 h-screen">
      <div
        ref={ref}
        className="bg-gray-500/20 h-screen flex items-center justify-center relative"
      >
        <div className="relative w-52 h-52">
          <FaGoogle className="text-9xl text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

          <FaFacebook
            className={`text-4xl text-blue-600 absolute opacity-0 transform scale-0 transition-all duration-500 ${
              showIcons ? "opacity-100 scale-100 delay-200" : ""
            } top-1/2 left-0 transform -translate-x-1/2 rotate-45`}
          />
          <FaTwitter
            className={`text-4xl text-blue-400 absolute opacity-0 transform scale-0 transition-all duration-500 ${
              showIcons ? "opacity-100 scale-100 delay-400" : ""
            } top-[20px] right-[180px] transform -translate-y-1/2 rotate-135`}
          />
          <FaInstagram
            className={`text-4xl text-pink-600 absolute opacity-0 transform scale-0 transition-all duration-500 ${
              showIcons ? "opacity-100 scale-100 delay-600" : ""
            } bottom-[180px] left-[180px] transform -translate-x-1/2 rotate-225`}
          />
          <FaLinkedin
            className={`text-4xl text-blue-700 absolute opacity-0 transform scale-0 transition-all duration-500 ${
              showIcons ? "opacity-100 scale-100 delay-800" : ""
            } bottom-[50px] right-[-30px] transform -translate-y-1/2 rotate-315`}
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
