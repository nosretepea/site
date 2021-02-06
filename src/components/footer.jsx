import * as React from "react";
import { Link } from "gatsby";
import Social from "./social";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer w-full fixed z-1 bottom-0 p-4">
        <div className="mx-auto flex justify-center w-full md:w-3/4 text-lg">
          <div className="">
            <Link to={`/`} className="home footer__link mx-4">
              <span>home</span>
            </Link>
            <Link to={`/about`} className="about footer__link mx-4">
              <span>about</span>
            </Link>
            <Link to={`/photos`} className="photos footer__link mx-4">
              <span>photos</span>
            </Link>
            <a className="resume footer__link mx-4"
              href="https://docs.google.com/document/d/1_qPgRIDe6HUI35ZE7yltQQK3NJYFk-iykZDMM4vYuZw/"
              rel="noreferrer"
              target="_blank">
              <span>résumé</span>
            </a>
          </div>
          <div className="">
            <Social height={'small'} />
          </div>
        </div>
      </div>
    );
  }
};