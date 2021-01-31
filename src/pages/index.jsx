import React from "react";
import { Link } from "gatsby";
import { LayoutContext } from "../components/layout";
import Tab from "../components/tab";
import GithubDark from "../assets/github-dark.png";
import GithubLight from "../assets/github-light.png";
import MailDark from "../assets/mail-dark.png";
import MailLight from "../assets/mail-light.png";
import LinkedinDark from "../assets/linkedin-dark.png";
import LinkedinLight from "../assets/linkedin-light.png";

const IndexPage = ({ data, path }) => {
  return (
    <LayoutContext.Consumer>
      {theme => (
        <div className="flex flex-grow flex-col justify-center">
          <div className="flex flex-grow flex-col justify-center text-center">
            <div>
              <h1 className="text-xl sm:text-3xl lg:text-6xl font-bold lowercase">Ashley Peterson</h1>
              <p className="pt-4 font-light">
                software developer, music enthusiast, cat lover, runner, and coffee addict based in Austin, TX<br/>
              </p>
            </div>
            <div className="flex justify-center py-4">
              <Link to={`/about`} className="category about text-base sm:text-xl lg:text-3xl">
                <Tab section='about' />
              </Link>
              <Link to={`/work`} className="category work text-base sm:text-xl lg:text-3xl">
                <Tab section='work' />
              </Link>
              <Link to={`/photos`} className="category photos text-base sm:text-xl lg:text-3xl">
                <Tab section='photos' />
              </Link>
              <Link to={`/resume`} className="category resume text-base sm:text-xl lg:text-3xl">
                <Tab section='résumé' />
              </Link>
            </div>
          </div>
          <div className="centered flex justify-center bottom-0 px-4 py-2">
            <div className="icon px-2">
              <a href="mailto:nosretepea@gmail.com"><img className="h-full" src={theme.displayMode === 'dark' ? MailDark : MailLight} alt="email" /></a>
            </div>
            <div className="icon px-2">
              <a href="https://www.linkedin.com/in/ashley-peterson-24387814a/"><img className="h-full" src={theme.displayMode === 'dark' ? LinkedinDark : LinkedinLight} alt="linkedin" /></a>
            </div>
            <div className="icon px-2">
              <a href="https://www.github.com/nosretepea"><img className="h-full" src={theme.displayMode === 'dark' ? GithubDark : GithubLight} alt="github" /></a>
            </div>
          </div>
        </div>
      )}
    </LayoutContext.Consumer>
  )
};

export default IndexPage;