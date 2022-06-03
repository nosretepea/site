import React, { ReactElement } from "react";
import Footer from "../components/footer";
import AshleyPhoto from "../../static/ashley.jpg";

const AboutPage: React.FC = (): ReactElement => (
  <div className="w-full flex justify-center items-center">
    <div className="h-auto md:h-4/5 w-full lg:w-5/6 xl:w-4/5 mx-auto px-4">
      <h2 className="about py-3 text-5xl font-bold">about</h2>
      <div className="content-container w-full flex flex-col md:flex-row items-start xl:w-5/6">
        <div className="w-1/3 pt-2 pr-5 hidden md:block">
          <img
            className="rounded-lg"
            src={AshleyPhoto}
            width="345"
            height="460"
          />
        </div>
        <div className="w-full md:w-2/3">
          <p>
            Hello! I'm Ashley, a software engineer currently living in Austin,
            Texas.
          </p>
          <p>
            Right now, I am working at{" "}
            <a
              href="https://www.lattice.com/"
              rel="noreferrer nofollow noopener"
              target="_blank"
              className="link"
            >
              Lattice
            </a>
            , a company with a people success platform which helps organizations
            develop, grow, and engage with their employees.
          </p>
          <p>
            I was born in Raleigh, North Carolina, but moved to Henderson,
            Nevada, when I was almost eight years old.
          </p>
          <p>
            At seventeen, I moved to St. Louis, Missouri, to attend Washington
            University in St. Louis, where I graduated with a Bachelor of
            Science in Computer Science and a Minor in Writing.
          </p>
          <p>
            When I'm not programming, I'm usually running or walking around Lady Bird Lake,
            cooking/baking a new recipe, browsing the internet for way too long,
            or watching reality competition shows on TV.
          </p>
          <p>
            Listening to music and going to concerts are other favorite
            activities of mine. Check out what I've been listening to lately
            on&nbsp;
            <a
              href="https://last.fm/user/oceanseacrest"
              rel="noreferrer nofollow noopener"
              target="_blank"
              className="link"
            >
              Last.fm
            </a>
            !
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
