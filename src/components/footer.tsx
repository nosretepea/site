import React, { ReactElement } from "react";
import { Link } from "gatsby";

const Footer: React.FC = (): ReactElement => (
  <div className="footer w-full fixed z-1 bottom-0 p-4">
    <div className="mx-auto flex justify-center items-center w-full">
      <div className="text-lg">
        <Link to={`/`} className="footer__link home mx-2 md:mx-4">
          <span>home</span>
        </Link>
        <Link to={`/about`} className="footer__link about mx-2 md:mx-4">
          <span>about</span>
        </Link>
        <Link to={`/photos`} className="footer__link photos mx-2 md:mx-4">
          <span>photos</span>
        </Link>
        <a className="footer__link resume mx-2 md:mx-4"
          href="https://docs.google.com/document/d/1_qPgRIDe6HUI35ZE7yltQQK3NJYFk-iykZDMM4vYuZw/"
          rel="noreferrer"
          target="_blank">
          <span>résumé</span>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;