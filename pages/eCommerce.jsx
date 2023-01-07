import Image from "next/image"
import React from "react"
import storeImg from "../public/assets/projects/ecomm.jpg"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from "next/link"

const eCommerce = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={storeImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 pl-4 lg:pl-2">
          <h2 className="py-2">E-commerce store</h2>
          <h3>React JS / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-3 lg:col-span-4 pl-2 lg:pl-0">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="text-gray-500 ">
            This app was built using React JS and MongoDB for backend, it is a
            full fledged e-commerce web. Users are able to buy clothings, can
            use different filters for best selection. This app is also enabled
            with authentication, checkout, stripe-payment and many more cool
            features.
          </p>
          <a
            href="https://github.com/Tushar-017/E-commerce-with-my-own-api-and-DB"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-6 mr-8 tracking-tight text-sm">
              Code
            </button>
          </a>
          <a
            href="https://shopwingss.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-6 tracking-tight text-sm">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-md shadow-gray-400 rounded-2xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="p-3 grid grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux-toolkit
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Styled-components
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Stripe Payment
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default eCommerce
