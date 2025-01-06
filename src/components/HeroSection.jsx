import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row h-screen">
      <div className="flex-1 flex flex-col md:flex-row  items-center  p-6 md:p-12">
        <div className="text-center md:text-left">
          <h2 className="md:text-2xl font-medium mb-6 pb-1 text-gray-400 border-b-2 border-gray-400">
            Our Team
          </h2>

          <p className="text-lg md:text-xl mb-2 text-gray-500">Loarrine Wolf</p>
          <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
            Technology <br /> Lawyer
          </h3>
          <Link
            href="/"
            className="inline-block text-red-500 underline hover:no-underline"
          >
            Explore
          </Link>
        </div>
        <div className="mt-6 md:mt-8">
          <Image
            src="/hero.png"
            alt="find_Property_Logo"
            width={600}
            height={600}
            sizes="100vw"
            priority
            className="md:max-w-[600px] "
          />
        </div>
      </div>

      <div className=" lg:w-[500px]   bg-red-400 text-white flex flex-col items-center justify-center p-6 md:p-12 ">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4 leading-6">
          Your Legal Adviser for the Problems of This Century
        </h1>
        <p className="text-lg md:text-xl text-center md:text-left mb-6">
          We offer solutions adapted to today’s needs.
        </p>
        <button className="hidden md:block px-8 py-3 bg-white text-red-500 font-semibold rounded-tr-[20px] rounded-bl-[20px] hover:bg-gray-200 transition duration-300">
          Login
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
