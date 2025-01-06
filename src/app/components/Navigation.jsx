"use client";
import React, { useState } from "react";
import Container from "../layout/Container";
import Link from "next/link";
import Image from "next/image";
import { navList } from "@/data/navList";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const pathname = usePathname();
  console.log(pathname, "jjj");
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="sticky top-0   z-10 bg-red-400 border-b border-b-gray-300/50 w-full ">
      <Container>
        <nav className="flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="find_Property_Logo"
              width={130}
              height={130}
              sizes="100vw"
              priority
              className="w-12 "
            />
          </Link>
          <ul className="hidden md:flex items-center gap-4">
            {navList?.map((navLink, index) => (
              <li
                key={index}
                className="relative hover:cursor-pointer text-white transition-all duration-300 text-md font-semibold"
              >
                <Link
                  href={navLink.href}
                  className={`${
                    pathname === navLink.href
                      ? "text-red-600 "
                      : "hover:text-red-600"
                  }`}
                >
                  {navLink.label}
                </Link>
                <span
                  className={`absolute top-[-3px] left-0 h-[2px] w-full bg-red-600 scale-x-0 transition-transform duration-300 ease-in-out ${
                    pathname === navLink.href
                      ? "scale-x-100"
                      : "hover:scale-x-100"
                  }`}
                />
              </li>
            ))}
          </ul>

          <button className="hidden md:block px-10 py-3 border-2 bg-transparent text-white    border-white rounded-tr-[30px] rounded-bl-[30px] text-md font-semibold">
            Login
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X color="#fff" /> : <Menu color="#fff" />}
          </button>

          <div
            className={` md:hidden space-y-3  absolute w-1/2 bg-red-500/50 h-screen shadow-md p-5 rounded-md top-16 right-0 text-white font-semibold text-center ${
              isNavOpen ? "translate-x-0" : "translate-x-full scale-0"
            } transition-transform transform ease-in-out duration-500`}
          >
            <ul className="flex flex-col gap-4">
              {navList?.map((navLink, index) => (
                <li
                  key={index}
                  className="hover:cursor-pointer hover:text-red-600 transition-all duration-300 relative"
                >
                  <Link
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    href={navLink.href}
                    className={`${
                      pathname === navLink.href
                        ? "text-red-600 "
                        : "hover:text-red-600"
                    }`}
                  >
                    {navLink.label}
                  </Link>
                  <span
                    className={`absolute bottom-[-2px] left-[45%] h-[2px] w-[30px] bg-red-600 scale-x-0 transition-transform duration-300 ease-in-out ${
                      pathname === navLink.href
                        ? "scale-x-100"
                        : "hover:scale-x-100"
                    }`}
                  />
                </li>
              ))}
            </ul>

            <button className="px-7 py-3 border-2 bg-transparent text-red-600  border-red-600 rounded-tr-[30px] rounded-bl-[30px] text-md font-semibold">
              Login
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
