import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../elements/Image";
import Slider from "react-slick";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Phát triển toàn diện với{" "}
              <span className="text-color-primary">Ohiro</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom text-color-primary"
                data-reveal-delay="400"
              >
                Chăm chút cho con từng bữa ăn bữa ngủ tuyệt vời
              </p>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            {/* <Slider {...settings}>
              <div>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "720px",
                    height: "400px",
                    position: "relative",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    className=""
                    src={require("./../../assets/images/san-pham/san-pham-main.jpeg")}
                    alt="Hero"
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "720px",
                    height: "400px",
                    position: "relative",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    className=""
                    src={require("./../../assets/images/san-pham/promotion1.jpg")}
                    alt="Hero"
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "720px",
                    height: "400px",
                    position: "relative",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    className=""
                    src={require("./../../assets/images/san-pham/promotion2.jpg")}
                    alt="Hero"
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "none" }}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "720px",
                    height: "400px",
                    position: "relative",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    className=""
                    src={require("./../../assets/images/san-pham/promotion3.jpg")}
                    alt="Hero"
                    width={"100%"}
                    height={"100%"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </Slider> */}
            <div
              style={{
                width: "100%",
                maxWidth: "720px",
                height: "400px",
                position: "relative",
                margin: "0 auto",
              }}
            >
              <Image
                className=""
                src={require("./../../assets/images/san-pham/san-pham-main.jpeg")}
                alt="Hero"
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
