import Image from "next/image"
import Link from "next/link"
import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import ContactImg from "../public/assets/contact.jpg"

const Contact = () => {
  const form = useRef()
  const initialState = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  }
  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_jqr2m2g",
        "template_55hsmxm",
        form.current,
        "5dMqnQV7CtUxV3sLH"
      )
      .then(
        () => alert("Massage sent! Successfully"),
        (error) => {
          alert(error.text)
        }
      )
      .then(setFormData(initialState))
  }
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-md sm:text-lg tracking-widest uppercase text-gray-500">
          Contact
        </p>
        <h2 className="py-4 text-xl md:text-2xl lg:text-4xl tracking-tighter text-gray-600">
          Get In Touch
        </h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-300 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 text-gray-600 font-serif text-2xl">
                  Tushar Rajput
                </h2>
                <p className="text-gray-600">Front-End Developer</p>
                <p className="py-4 text-gray-500">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/tushar-rajput17/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Tushar-017"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <Link href="/resume">
                    <a>
                      <div className="rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-md shadow-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm text-gray-500 py-2">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-100"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm text-gray-500 py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-100"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm text-gray-500 py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-100"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm text-gray-500 py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-100"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm text-gray-500 py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-100"
                    rows="10"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-md shadow-gray-400   p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-gray-400" size={20} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
