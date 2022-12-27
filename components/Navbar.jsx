import React, { useState } from "react"
// import Image from "next/image"
import Link from "next/link"
import { AiOutlineClose, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsMoonStars } from "react-icons/bs"
import { TbMenu2 } from "react-icons/tb"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="sticky w-full h-20 z-50">
      <div className="flex justify-between items-center w-full h-full  ">
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="mr-10 text-sm uppercase text-gray-600 hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="mr-10 text-sm uppercase text-gray-600 hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="mr-10 text-sm uppercase text-gray-600 hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="mr-10 text-sm uppercase text-gray-600 hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden text-gray-600">
            <TbMenu2 size={25} />
          </div>
        </div>
        <BsMoonStars size={20} color="#7a7a7a" />
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff]  p-6 ease-in duration-500"
              : "fixed left-[-120%] top-0 p-6 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between pb-5">
              <div
                onClick={handleNav}
                className="cursor-pointer pt-2 text-gray-600"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="text-[14px] py-4 pl-2 w-[85%] md:w-[90%]">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Let's Build something legendary together.
              </p>
            </div>
          </div>
          <div>
            <ul className="uppercase pt-2">
              <Link href="/">
                <li className="py-4 text-sm pl-2 text-[#686868] active:text-black">
                  Home
                </li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm pl-2 text-[#686868] active:text-black">
                  Skills
                </li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm pl-2 text-[#686868] active:text-black">
                  Projects
                </li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm pl-2 text-[#686868] active:text-black">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className="uppercase tracking-widest  ">Let's connect</p>
              <div className="flex items-center justify-start gap-3 flex-wrap my-4 w-full md:gap-6">
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineTwitter />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
