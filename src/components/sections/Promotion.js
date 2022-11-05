import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Promotion = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Chăm chút cho con",
    paragraph: "Từng bữa ăn, bữa ngủ tuyệt vời",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner has-shadow">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/san-pham/promotion1.jpg")}
                    alt="Features split 01"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="testimonial-item-footer text-color-primary text-xs mt-32 mb-0 has-top-divider">
                  Hình ảnh sản phẩm
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner has-shadow">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/san-pham/promotion2.jpg")}
                    alt="Features split 02"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="testimonial-item-footer text-color-primary text-xs mt-32 mb-0 has-top-divider">
                  Hình ảnh sản phẩm
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner has-shadow">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/san-pham/promotion3.jpg")}
                    alt="Features split 03"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="testimonial-item-footer text-color-primary text-xs mt-32 mb-0 has-top-divider">
                  Hình ảnh sản phẩm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Promotion.propTypes = propTypes;
Promotion.defaultProps = defaultProps;

export default Promotion;
