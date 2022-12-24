import React from "react"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto p-6">
      <div className="flex flex-col-reverse sm:flex-row items-start gap-6 pt-4">
        <div className="flex flex-col item-start">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">
            Tushar Rajput
          </h1>
          <h2 className="text-gray-700 text-sm dark:text-gray-200 pl-1 mb-4">
            Frontend Developer{" "}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            Helping developers build a faster web. Teaching about web
            development, serverless, and React / Next.js.
          </p>
        </div>
        <Image
          src="/../public/assets/tushar.png"
          alt="/"
          width="90"
          height="90"
          className="rounded-full "
        />
      </div>
    </div>
  )
}

export default Hero
