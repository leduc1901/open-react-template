import React, { useState } from "react";
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

const Feedback = ({
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
    "feedback section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "feedback-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: <p style={{ fontSize: 40 }}>Cơ chế giúp ăn ngon ngủ ngon</p>,
    paragraph: (
      <p
        style={{ fontSize: 44, fontWeight: 600 }}
        className="text-color-primary"
      >
        & Tăng đề kháng
      </p>
    ),
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
                    src={require("./../../assets/images/san-pham/san-pham-1.png")}
                    alt="Features split 01"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="testimonial-item-footer text-color-primary text-sm mt-32 mb-4">
                  Sau 5 ngày
                </div>
                <p className="text-xs">
                  Kích thích lại vị giác và cảm giác thèm ăn ở trẻ, nhìn thấy đồ
                  ăn sẽ cảm thấy thèm.
                </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner has-shadow">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/san-pham/san-pham-2.png")}
                    alt="Features split 02"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="testimonial-item-footer text-color-primary text-sm mt-32 mb-4">
                  Sau 10 ngày
                </div>
                <p className="text-xs">
                  Cân bằng hệ vi sinh đường ruột giúp cơ thể gia tăng hiệu quả
                  chuyển hóa thức ăn thành các dưỡng chất nuôi cơ thể. Trẻ đói
                  và ăn nhiều hơn bình thường. Hạn chế tối đa tình trạng táo
                  bón.
                </p>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner has-shadow">
                <div className="testimonial-item-content">
                  <Image
                    src={require("./../../assets/images/san-pham/san-pham-3.png")}
                    alt="Features split 03"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="testimonial-item-footer text-color-primary text-sm p-4 mb-4">
                  Sau 20 ngày
                </div>
                <p className="text-xs">
                  Hấp thụ Yến Tươi, Thymomodulin, Cao men bia .. bổ sung chất
                  dinh dưỡng, giúp cơ thể chống lại một số bệnh do giảm đề
                  kháng. Phục hồi thể trạng, tăng cường sức khỏe, để chống lại
                  cảm giác mệt mỏi, uể oải của trẻ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;

export default Feedback;
