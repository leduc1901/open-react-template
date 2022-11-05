import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Các sản phẩm của Ohiro",
    paragraph:
      "Tăng cường khả năng hấp thu dành cho trẻ biếng ăn, cần bổ sung dinh dưỡng.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Ohiro
                </div>
                <h3 className="mt-0 mb-12">
                  COLOS PROBIOTIC OHIRO - Sữa Non Tảo Xoắn Viện Dinh Dưỡng
                </h3>
                <p className="m-0">
                  Sữa Non Colos Probiotic là thực phẩm bổ sung cho trẻ từ 0- 6
                  tháng tuổi, cho trẻ không được bú sữa non , hệ miễn dịch yếu,
                  trẻ sinh non, trẻ tiêu hóa kém, chậm tăng cân. Sữa Non Colos
                  Probiotic chứa dưỡng chất với hàm lượng cao giúp trẻ phát
                  triển toàn diện về não bộ, chiều cao, thị giác, thính giác...
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/san-pham/san-pham-1.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Ohiro
                </div>
                <h3 className="mt-0 mb-12">
                  COLOS GROW IQ OHIRO - Sữa Non Tảo Xoắn Viện Dinh Dưỡng
                </h3>
                <p className="m-0">
                  Colos Grow IQ là sản phẩm cao cấp chuyên biệt dành cho trẻ
                  Tăng Cường Phát Triển Chiều Cao - Trí Não. Hỗ trợ phát triển
                  trí thông minh và tăng cường nhận thức ở trẻ.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/san-pham/san-pham-2.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Ohiro
                </div>
                <h3 className="mt-0 mb-12">
                  OLOS PEDIA PLUS OHIRO - Sữa Non Tảo Xoắn Viện Dinh Dưỡng
                </h3>
                <p className="m-0">
                  Colos Pedia Plus là sản phẩm cao cấp chuyên biệt dành cho trẻ
                  biếng ăn, chậm lên cân. Hỗ trợ cải thiện hệ tiêu hóa và đường
                  ruột, tăng cường trao đổi chất hấp thu dinh dưỡng.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/san-pham/san-pham-3.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
