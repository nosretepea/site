import React from "react";
import Footer from "../components/footer";

const AboutPage = ({ data, path }) => (
  <div className="w-full flex justify-center items-center">
    <div className="h-4/5 w-full lg:w-4/5 mx-auto px-4">
      <h2 className="about py-2 text-5xl font-bold">about</h2>
      <p className="font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum
      </p>
    </div>
    <Footer />
  </div>
);

export default AboutPage;