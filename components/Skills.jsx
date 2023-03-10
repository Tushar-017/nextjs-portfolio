import Image from "next/image"
import React from "react"
import Html from "../public/assets/skills/html.png"
import Css from "../public/assets/skills/css.png"
import Javascript from "../public/assets/skills/javascript.png"
import ReactImg from "../public/assets/skills/react.png"
import Tailwind from "../public/assets/skills/tailwind.png"
import Github from "../public/assets/skills/github1.png"
import Firebase from "../public/assets/skills/firebase.png"
import NextJS from "../public/assets/skills/nextjs.png"
import MongoDB from "../public/assets/skills/mongo.png"

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-md sm:text-lg tracking-widest uppercase text-gray-500">
          Skills
        </p>
        <h2 className="py-4 text-xl md:text-2xl lg:text-4xl tracking-tighter text-gray-600">
          What I Can Do
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-3 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 sm:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="50px" height="50px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 sm:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="50px" height="50px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 sm:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="50px" height="50px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-sm">JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 sm:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="50px" height="50px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 sm:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="50px" height="50px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 sm:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} width="50px" height="50px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 sm:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="50px" height="50px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 sm:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="50px" height="50px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row-2 sm:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MongoDB} width="50px" height="50px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
