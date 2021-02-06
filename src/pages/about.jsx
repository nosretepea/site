import React from "react";
import Footer from "../components/footer";

const AboutPage = ({ data, path }) => (
  <div className="w-full flex justify-center items-center">
    <div className="h-4/5 w-full lg:w-5/6 xl:w-4/5 mx-auto px-4">
      <h2 className="about py-3 text-5xl font-bold">about</h2>
      <div className="w-2/3 py-1">
        <p>I'm Ashley, a software developer living in Austin, TX, and I've been working in tech since early 2018.</p>
        <p>TODO</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;