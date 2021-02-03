import * as React from "react";
import Img from 'gatsby-image'
import * as styles from '../scss/lightbox.module.scss'

export default class Lightbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: this.props.index,
      length: this.props.data.allFile.edges.length,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.detectKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.detectKeyDown, false);
  }

  detectKeyDown(e) {
    console.log('got in detectKeyDown')
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

  changeSlide(direction) {
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
      <div className={styles.lightbox}>
        <span className={styles.close} onClick={this.props.onToggleLightbox}>&times;</span>
        <div className={styles.lightbox__main}>
          <div className={styles.image_container}>
            {this.props.data.allFile.edges.map((edge, index) => (
              <div key={`lightbox_img_` + index} className={index === this.state.currentIndex ? `${styles.image}` : `${styles.image} ${styles.hidden}`}>
                <Img fluid={{ ...edge.node.childImageSharp.fluid }} />
              </div>
            ))}
          </div>
          <button className={styles.prev} onKeyDown={(e) => this.detectKeyDown(e)} onClick={() => this.changeSlide(-1)}>&#10094;</button>
          <button className={styles.next} onKeyDown={(e) => this.detectKeyDown(e)} onClick={() => this.changeSlide(1)}>&#10095;</button>
        </div>
      </div>
    );
  }
};