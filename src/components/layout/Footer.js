import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Order from "../sections/Order";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer
      {...props}
      className={classes}
      style={{
        background: "#fefbf4",
      }}
    >
      <Order />

      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-item">
            <p
              className="text-color-primary"
              style={{ marginTop: 16, fontWeight: 600, fontSize: 32 }}
            >
              ROVIN Việt Nam
            </p>
            <div
              className="text-black"
              style={{ fontSize: 16, textAlign: "left" }}
            >
              <span>
                <i aria-hidden="true" class="fas fa-shipping-fast"></i>{" "}
              </span>
              <span>Tuyển Giám Đốc Khu Vực, NPP, Đại Lý</span>
            </div>
            <div
              className="text-black"
              style={{ fontSize: 16, textAlign: "left" }}
            >
              <span>
                <i aria-hidden="true" class="far fa-check-circle"></i>{" "}
              </span>
              <span>Chính Sách Chiết Khấu Hệ Thống Cao</span>
            </div>
            <div
              className="text-black"
              style={{ fontSize: 16, textAlign: "left" }}
            >
              <span>
                <i aria-hidden="true" class="fas fa-money-check-alt"></i>{" "}
              </span>
              <span>Được Đào Tạo KDOL</span>
            </div>
            <div
              className="text-black"
              style={{ fontSize: 16, textAlign: "left" }}
            >
              <span>
                <i aria-hidden="true" class="fas fa-calendar-day"></i>{" "}
              </span>
              <span>Thưởng Doanh Số Đều Đặn Hàng Quý</span>
            </div>
            <div
              className="text-black"
              style={{ fontSize: 16, textAlign: "left" }}
            >
              <span>(*) </span>
              <span>
                Lưu ý: Hiệu quả của sản phẩm tùy thuộc vào cơ địa của mỗi người.
              </span>
            </div>
          </div>
          <div className="footer-item">
            <p
              className="text-color-primary"
              style={{ marginTop: 16, fontWeight: 600, fontSize: 32 }}
            >
              Liên hệ
            </p>
            <div
              className="text-black"
              style={{ fontSize: 16, textAlign: "left" }}
            >
              <span>
                <i aria-hidden="true" class="far fa-building"></i>{" "}
              </span>
              <span>CÔNG TY TNHH SẢN XUẤT & THƯƠNG MẠI ROVIN VIỆT NAM</span>
            </div>
            <div
              className="text-black"
              style={{ fontSize: 16, textAlign: "left" }}
            >
              <a href="https://zalo.me/0919223035">
                <span class="elementor-icon-list-icon">
                  <i aria-hidden="true" class="fas fa-phone-volume"></i>{" "}
                </span>
                <span class="elementor-icon-list-text">
                  Zalo: 0919.223.035 (Ưu tiên Sỉ, Đại Lý)
                </span>
              </a>
            </div>
            <div
              className="text-black"
              style={{ fontSize: 16, textAlign: "left" }}
            >
              <a href="tel://0919223035">
                <span class="">
                  <i aria-hidden="true" class="fas fa-phone-volume"></i>{" "}
                </span>
                <span class="">Hotline: 0919.223.035</span>
              </a>
            </div>
            <div
              className="text-black"
              style={{ fontSize: 16, textAlign: "left" }}
            >
              <span>
                <i aria-hidden="true" class="fas fa-location-arrow"></i>{" "}
              </span>
              <span>Email: lienhe@rovinvietnam.vn</span>
            </div>
          </div>
        </div>
        <p>
          © Bản quyền thuộc về www.ohiro.vn, vui lòng không sao chép dưới mọi
          hình thức.
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
