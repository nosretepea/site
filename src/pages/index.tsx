import React, { ReactElement } from "react";
import { Link } from "gatsby";
import Tab from "../components/tab";
import Social from "../components/social";

const IndexPage: React.FC = (): ReactElement => {
  return (
    <>
      <div className="flex flex-grow flex-col justify-center">
        <div className="flex flex-grow flex-col justify-center text-center">
          <div>
            <h1 className="name text-5xl xl:text-6xl font-bold lowercase">Ashley Peterson</h1>
            <p className="text-lg md:text-base pt-4 px-4 sm:px-12 lg:px-4 font-light">
              software engineer, music enthusiast, cat lover, runner, and coffee addict based in Austin, TX<br />
            </p>
          </div>
          <div className="flex justify-center py-4">
            <Link to={`/about/`} className="category about text-2xl xl:text-3xl" role={'button'}>
              <Tab section="about" />
            </Link>
            <Link to={`/photos/`} className="category photos text-2xl xl:text-3xl">
              <Tab section="photos" />
            </Link>
            <a className="category resume text-2xl xl:text-3xl"
              href="https://docs.google.com/document/d/1_qPgRIDe6HUI35ZE7yltQQK3NJYFk-iykZDMM4vYuZw/"
              rel="noreferrer"
              target="_blank">
              <Tab section="résumé" />
            </a>
          </div>
        </div>
        <div className="flex centered justify-center bottom-0 px-4 py-3">
          <Social height={"regular"} />
        </div>
      </div>
    </>
  );
};

export default IndexPage;