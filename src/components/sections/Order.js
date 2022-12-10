import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "../elements/Image";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";

const FORM_URL =
  "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfiL1Zmk-kKhbLAzY_MhNKzfzDR2KfWXFlxqTIxLYTH_2zetg/formResponse";
const NAME_ID = "entry.1841354206";
const QUANTITY_ID = "entry.1533285241";
const ADDRESS_ID = "entry.607556679";
const PHONE_ID = "entry.1502948008";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Order = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const [submitted, setSubmitted] = useState(false);

  const outerClasses = classNames(
    "section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "question-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = () => {
    if (!name || !phone || !quantity || !address) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      const formData = new FormData();
      formData.append(NAME_ID, name);
      formData.append(QUANTITY_ID, quantity);
      formData.append(ADDRESS_ID, address);
      formData.append(PHONE_ID, phone);

      fetch(FORM_URL, {
        method: "POST",
        body: formData,
      }).then((response) => response.json());

      setSubmitted(true);
    }
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <p
            className="text-black mb-32 text-sm"
            style={{ textAlign: "center" }}
          >
            Hãy đặt hàng ngay cho con yêu tại đây nhé mẹ. Ohiro Việt Nam sẽ có
            các chuyên gia tư vấn chăm sóc sức khỏe hàng đầu, hướng dẫn liệu
            trình phù hợp với tình trạng riêng của từng bé.
          </p>
          <div className="inner-container" style={{ justifyContent: "center" }}>
            <div
              className="question-content"
              style={{ maxWidth: 600, width: "100%" }}
            >
              <div className="cta-slogan mb-4">
                <h3
                  className="m-0 text-color-primary"
                  style={{ fontWeight: 600, fontSize: 28 }}
                >
                  Đặt mua nhanh
                </h3>
              </div>
              <div className="cta-action mt-0">
                {!submitted ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <label
                        for="questionName"
                        style={{ marginBottom: 4, textAlign: "left" }}
                        className="text-xs text-black"
                      >
                        Tên của Ba/Mẹ
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-form"
                        style={{ maxWidth: 800 }}
                        id="questionName"
                        placeholder="Để tiện xưng hô"
                      />
                    </div>
                    <div
                      style={{
                        marginTop: 16,
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <label
                        for="questionNumber"
                        style={{ marginBottom: 4, textAlign: "left" }}
                        className="text-xs text-black"
                      >
                        Số điện thoại
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="input-form"
                        style={{ maxWidth: 800 }}
                        id="questionNumber"
                        placeholder="Để liên hệ nhanh nhất"
                      />
                    </div>
                    <div
                      style={{
                        marginTop: 16,
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <label
                        for="questionNumber"
                        style={{ marginBottom: 4, textAlign: "left" }}
                        className="text-xs text-black"
                      >
                        Số lượng mua
                      </label>
                      <input
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="input-form"
                        style={{ maxWidth: 800 }}
                        id="questionNumber"
                        placeholder="VD: 3 hộp, 5 hộp"
                      />
                    </div>
                    <div
                      style={{
                        marginTop: 16,
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <label
                        for="questionNumber"
                        style={{ marginBottom: 4, textAlign: "left" }}
                        className="text-xs text-black"
                      >
                        Địa chỉ
                      </label>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="input-form"
                        style={{ maxWidth: 800 }}
                        id="questionNumber"
                        placeholder="Để nhận hàng"
                      />
                    </div>
                    <Button
                      onClick={onSubmit}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 100,
                      }}
                      className="bg-color-primary mt-16"
                    >
                      <p
                        style={{ margin: 0, marginRight: 12 }}
                        className="text-white"
                      >
                        Đặt mua ngay
                      </p>
                      <svg
                        width="16"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </>
                ) : (
                  <p className="text-black">
                    Hãy đợi điện thoại, chúng tôi sẽ gọi lại cho bạn ngay sau từ
                    5 phút -20 phút nữa. Khung giờ làm việc của Rovin Việt Nam
                    từ 8:00 - 21h30 mỗi ngày, yêu cầu gửi đi sau khoảng thời
                    gian này sẽ được xử lý vào sáng hôm sau. Nếu không nhận được
                    phản hồi, vui lòng gọi tới hotline ở dưới. Cảm ơn quý khách
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Order.propTypes = propTypes;
Order.defaultProps = defaultProps;

export default Order;
