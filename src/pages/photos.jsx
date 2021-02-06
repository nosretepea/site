import React from "react";
import Footer from "../components/footer";
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Lightbox from '../components/lightbox.jsx'

export default class PhotosPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLightbox: false,
      photoIndex: 0,
    };
  }

  handleImageClick = (index) => {
    this.setState({
      photoIndex: index
    });
    this.toggleLightbox();
  }

  toggleLightbox = () => {
    this.setState({
      showLightbox: !this.state.showLightbox,
    });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
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
      `}
        render={data => (
          <div className="w-full flex justify-center items-center" >
            <div className="h-4/5 w-full lg:w-4/5 mx-auto px-4">
              <h2 className="photos py-3 text-5xl font-bold">photos</h2>
              <div className="images-container grid grid-cols-1 md:grid-cols-4 md:gap-2">
                {data.allFile.edges.map((edge, index) => (
                  <div key={`img_` + index} className="image" onClick={() => this.handleImageClick(index)}>
                    <Img fluid={{ ...edge.node.childImageSharp.fluid, aspectRatio: edge.node.childImageSharp.fluid.aspectRatio }} />
                  </div>
                ))}
              </div>
            </div>
            {this.state.showLightbox ? <Lightbox images={data.allFile.edges} index={this.state.photoIndex} onToggleLightbox={this.toggleLightbox} /> : null}
            <Footer />
          </div>
        )}
      />
    );
  }
}