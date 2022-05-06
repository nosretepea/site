import React, { useState, ReactElement } from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Footer from "../components/footer";
import Lightbox from "../components/lightbox";

const PhotosPage: React.FC = (): ReactElement => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = (index: number): void => {
    setPhotoIndex(index);
    toggleLightbox();
  }

  const toggleLightbox = (): void => {
    setShowLightbox(!showLightbox);
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(
            filter: {
              extension: { regex: "/(jpg)/" }
              relativeDirectory: { eq: "photography" }
            }
            sort: { fields: name, order: DESC }
          ) {
            edges {
              node {
                childImageSharp {
                  gatsbyImageData(
                    quality: 70
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    transformOptions: { fit: INSIDE }
                  )
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="w-full flex justify-center items-center">
          <div className="h-auto md:h-4/5 w-full lg:w-5/6 xl:w-4/5 mx-auto px-4">
            <h2 className="photos py-3 text-5xl font-bold">photos</h2>
            <div className="content-container">
              <p>
                The photos here were taken with either my Google Pixel 5 or my
                old Samsung Galaxy S8+.
              </p>
              <p>Click on a photograph to open the slideshow view.</p>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:gap-2"
                style={{ gridAutoRows: "300px" }}
              >
                {data.allFile.edges.map(
                  (
                    edge: {
                      node: {
                        childImageSharp: { gatsbyImageData: IGatsbyImageData }
                      }
                    },
                    index: number
                  ) => (
                    <GatsbyImage
                      key={`img_` + index}
                      role="button"
                      tabIndex={index}
                      image={{ ...edge.node.childImageSharp.gatsbyImageData }}
                      imgStyle={{ height: "300px" }}
                      alt=""
                      className="image rounded-sm"
                      onClick={() => handleImageClick(index)}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          {showLightbox && (
            <Lightbox
              images={Array.from(data.allFile.edges)}
              index={photoIndex}
              onToggleLightbox={toggleLightbox}
            />
          )}
          <Footer />
        </div>
      )}
    />
  );
}

export default PhotosPage;
