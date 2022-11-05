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
const FeaturesTiles = ({
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
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Thể chất - Sức Khỏe - Trí tuệ",
    paragraph: "Dinh dưỡng đầy đủ là nền tảng vững chắc để bé phát triển",
  };

  return (
    <section {...props} className={outerClasses} style={{ marginTop: 120 }}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Bổ Dưỡng</h4>
                  <p className="m-0 text-sm">
                    chứa dưỡng chất với hàm lượng cao giúp trẻ phát triển toàn
                    diện về não bộ, chiều cao, thị giác, thính giác
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Miễn Dịch</h4>
                  <p className="m-0 text-sm">
                    Chứa Hàm lượng cao kháng thể IgG từ Sữa non và chất miễn
                    dịch cho trẻ hệ miễn dịch khỏe mạnh, tăng sức đề kháng.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Phát Triển</h4>
                  <p className="m-0 text-sm">
                    Ohiro chứa dưỡng chất với hàm lượng cao giúp trẻ phát triển
                    toàn diện về não bộ, chiều cao, thị giác, thính giác...
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Dễ Tiêu Hoá</h4>
                  <p className="m-0 text-sm">
                    Ohiro dễ tiêu hóa, dễ hấp thu: Chứa hàm lượng chất xơ cao và
                    Bộ 5 Enzyme giúp trẻ hấp thu dinh dưỡng tối đa
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Dễ Hấp Thu</h4>
                  <p className="m-0 text-sm">
                    Ohiro chứa dưỡng chất MCT là chất béo phân tử ngắn, dễ tiêu
                    hóa, hấp thu, giúp trẻ phát triển tốt trong giai đoạn mới
                    chào đời.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Tiện Lợi</h4>
                  <p className="m-0 text-sm">
                    Ohiro được đóng gói trong các gói nhỏ tiện lợi, dễ bảo quản
                    để đảm bảo chất lượng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
