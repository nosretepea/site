import React from "react"
import { Link } from "gatsby"
import Tab from "../components/tab"

const IndexPage = ({ data, path }) => {
  return (
    <div className="flex flex-grow flex-col justify-center text-center">
      <div>
        <h1 className="py-2 text-xl sm:text-3xl lg:text-6xl font-bold lowercase">Ashley Peterson</h1>
        <p className="font-light">
          software developer, music enthusiast, cat lover, runner, and coffee addict based in Austin, TX
        </p>
      </div>
      <div className="flex justify-center py-4">
        <Link to={`/about`} className="category about rounded-l-lg text-base sm:text-xl lg:text-3xl">
          <Tab section='about' />
        </Link>
        <Link to={`/work`} className="category work text-base sm:text-xl lg:text-3xl">
          <Tab section='work' />
        </Link>
        <Link to={`/photos`} className="category photos text-base sm:text-xl lg:text-3xl">
          <Tab section='photos' />
        </Link>
        <Link to={`/resume`} className="category resume rounded-r-lg text-base sm:text-xl lg:text-3xl">
          <Tab section='résumé' />
        </Link>
      </div>
      <div className="flex justify-center py-4">
        <span>icon1&nbsp;</span>
        <span>icon2&nbsp;</span>
        <span>icon3&nbsp;</span>
      </div>
    </div>
  )
}

export default IndexPage