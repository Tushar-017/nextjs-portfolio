import React from "react"
import houseMarketImg from "../public/assets/projects/house-market.png"
import eCommerceImg from "../public/assets/projects/ecommerce.png"
import wokeImg from "../public/assets/projects/woke.png"
import todoImg from "../public/assets/projects/nodelima.png"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div id="projects" className="w-full h-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-md sm:text-lg tracking-widest uppercase text-gray-500">
          Projects
        </p>
        <h2 className="py-4 text-xl md:text-2xl lg:text-4xl tracking-tighter text-gray-600">
          What I&apos;ve Built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="House MarketPlace"
            backgroundImg={houseMarketImg}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="E-commerce"
            backgroundImg={eCommerceImg}
            projectUrl="/eCommerce"
            tech="React JS"
          />
          <ProjectItem
            title="Project Management"
            backgroundImg={wokeImg}
            projectUrl="/projectManagement"
            tech="React JS"
          />
          <ProjectItem
            title="Todo App"
            backgroundImg={todoImg}
            projectUrl="/todo"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
