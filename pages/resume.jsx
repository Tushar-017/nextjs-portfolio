import React from "react"
import Head from "next/head"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const resume = () => {
  return (
    <>
      <Head>
        <title>Tushar | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center font-thin uppercase text-[25px]">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Tushar Rajput</h2>
          <div className="flex">
            <a
              href="https://github.com/Tushar-017"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/tushar-rajput17/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p className="text-gray-400">
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p className="px-2">
          <span className="font-bold">
            Highly motivated ReactJS Front End Developer with 2 years’
            experience
          </span>{" "}
          with delivering forward-thinking technological advancements that meet
          diverse business and operational needs. An Open-Source Enthusiast who
          is highly passionate about building fast, creative applications and
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          writing beautiful code. I'm a person who loves to depict messages in
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          my work. With 'Making Difference' perspective while building web.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span> RESTAPI
          </p>
          {/* <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6 px-1">
          <p className="italic">
            <span className="font-bold italic">GLEAFINK LLC</span>
            <span className="px-2">|</span>Banglore, India
          </p>
          <p className="py-1 italic">
            Front End Web Developer (2022 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile, tablet, etc. responsive UI layouts
              with understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Optimized components to improve performance such as implementing
              memoization, optimize web images, etc.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default resume
