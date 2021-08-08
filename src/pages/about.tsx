import React, { ReactElement } from "react";
import Footer from "../components/footer";

const AboutPage: React.FC = (): ReactElement => (
  <div className="w-full flex justify-center items-center">
    <div className="h-auto md:h-4/5 w-full lg:w-5/6 xl:w-4/5 mx-auto px-4">
      <h2 className="about py-3 text-5xl font-bold">about</h2>
      <div className="content-container w-full md:w-2/3">
        <p>Hello! I'm Ashley, a software engineer currently living in Austin, Texas.</p>
        <p>Right now, I am working at <a href="https://www.aceable.com/" rel="noreferrer" target="_blank" className="underline">Aceable</a>,
          an e-learning company that provides accredited licensing courses to help people achieve their goals.
        </p>
        <p>I was born in Raleigh, North Carolina, but moved to Henderson, Nevada, when I was almost eight years old.</p>
        <p>
          At seventeen, I moved to St. Louis, Missouri, to attend Washington University in St. Louis, where I graduated with
          a Bachelor of Science in Computer Science and a Minor in Writing.
        </p>
        <p>
          When I'm not programming, I'm usually running around Lady Bird Lake, taking a leisurely walk, or cooking a new recipe.
          Recently, my focus has been on making more vegetarian dishes.
        </p>
        <p>
          Listening to music and going to concerts are other favorite activities of mine. Check out what I've been listening to lately on&nbsp;
          <a href="https://last.fm/user/oceanseacrest" rel="noreferrer" target="_blank" className="underline">Last.fm</a>!
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;