import * as React from "react";
import { Link } from "gatsby";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer w-full fixed z-1 bottom-0 p-4">
        <div class="mx-auto w-3/4 text-lg">
          <Link to={`/`} className="home footer__link mx-4">
            <span>home</span>
          </Link>
          <Link to={`/about`} className="about footer__link mx-4">
            <span>about</span>
          </Link>
          <Link to={`/photos`} className="photos footer__link mx-4">
            <span>photos</span>
          </Link>
        </div>
      </div>
    );
  }
};