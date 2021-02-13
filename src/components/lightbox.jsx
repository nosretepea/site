import * as React from "react";
import Img from 'gatsby-image';

export default class Lightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: this.props.index,
      length: this.props.images.length,
    };
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.detectKeyDown, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.detectKeyDown, false);
  }

  detectKeyDown = (e) => {
    switch (e.keyCode) {
      case 27:
        this.props.onToggleLightbox();
        break;
      case 37:
        this.changeSlide(-1);
        break;
      case 39:
        this.changeSlide(1);
        break;
      default:
    }
  }

  changeSlide = (direction) => {
    let newCurrentIndex = this.state.currentIndex;
    if (this.state.currentIndex + direction === -1) {
      newCurrentIndex = this.state.length;
    }
    if (this.state.currentIndex + direction === this.state.length) {
      newCurrentIndex = -1;
    }
    this.setState({
      currentIndex: newCurrentIndex += direction
    });
  }

  render() {
    return (
      <div className="lightbox fixed z-10 left-0 top-0 w-full h-full overflow-auto">
        <span
          role="button"
          tabIndex={0}
          className="cursor-pointer text-white text-5xl fixed left-0 px-3"
          onClick={() => this.props.onToggleLightbox()}
          onKeyDown={() => this.props.onToggleLightbox()}>
          &times;
        </span>
        <div className="h-full flex justify-center items-center">
          <div className="lightbox-image__container">
            <Img
              fluid={this.props.images[this.state.currentIndex].node.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <span role="button" tabIndex={0} className="prev" onKeyDown={(e) => this.detectKeyDown(e)} onClick={() => this.changeSlide(-1)}>&#10094;</span>
        <span role="button" tabIndex={0} className="next" onKeyDown={(e) => this.detectKeyDown(e)} onClick={() => this.changeSlide(1)}>&#10095;</span>
      </div>
    );
  }
};
