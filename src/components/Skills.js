import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import webDev from "../assets/img/web-development.png";
import colorSharp from "../assets/img/color-sharp.png";
import drwPen from "../assets/img/pencillogo.png";
import ntwk from "../assets/img/networking.png"
import cloud from "../assets/img/cloud.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ marginBottom: "2rem" }}>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider skill-slider-new"
              >
                <div className="item">
                  <img src={webDev} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={drwPen} alt="Image" />
                  <h5>Web Designing</h5>
                </div>
                <div className="item">
                  <img src={ntwk} alt="Image" />
                  <h5>Soft Skills</h5>
                </div>
                <div className="item">
                  <img src={cloud} alt="Image" />
                  <h5>Databases/Cloud</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
