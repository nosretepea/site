import React from "react";
import Footer from "../components/footer";
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Lightbox from '../components/lightbox.jsx'

export const query = graphql`
  query {
    allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "photography"}} sort: {fields: [name], order: DESC}) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100) { ...GatsbyImageSharpFluid }
          }
        }
      }
    }
  }
`;

const PhotosPage = ({ data, path }) => (
  <div className="w-full flex justify-center items-center">
    <div className="h-4/5 w-full lg:w-4/5 mx-auto px-4">
      <h2 className="photos py-3 text-5xl font-bold">photos</h2>
      <div className="images-container grid grid-cols-4 gap-2">
        {data.allFile.edges.map((edge, index) => (
          <div className="image">
            <Img fluid={{ ...edge.node.childImageSharp.fluid, aspectRatio: edge.node.childImageSharp.fluid.aspectRatio }} />
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default PhotosPage;

/*< div className = {`section_box__content`}>
  <div className={`section_box__content__inner fade_in__fast`}>
    <div className={`paragraph`}>
      All photos taken with my Samsung Galaxy S8+. I wasn't joking when I said amateur.
                <br />
                Click an image to enlarge it.
              </div>
    <div className={`image_container`}>
      {data.allFile.edges.map((edge, index) => (
        <div key={`img_` + index} className={styles.image} onClick={() => this.handleImageClick(index)}>
          <Img fluid={{ ...edge.node.childImageSharp.fluid, aspectRatio: edge.node.childImageSharp.fluid.aspectRatio }} />
        </div>
      ))}
    </div>
  </div>
{ this.state.showLightbox ? <Lightbox data={data} index={this.state.photoIndex} onToggleLightbox={this.toggleLightbox} /> : null }
      </div >*/