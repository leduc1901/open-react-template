import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "../elements/Image";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf9SeXxLoV_Z1zEbEeR824TX29J6tD-eUvveFblV8YAe9o96w/formResponse";
const NAME_ID = "entry.87652394";
const PHONE_ID = "entry.258401120";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Question = ({
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

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = () => {
    if (!name || !phone) {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      const formData = new FormData();
      formData.append(NAME_ID, name);
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
          <div className="inner-container">
            <div className="question-content">
              <div className="cta-slogan mb-4">
                <h3 className="m-0" style={{ fontWeight: 600, fontSize: 28 }}>
                  Bố mẹ không có{" "}
                  <span className="text-color-primary">thời gian ?</span>
                </h3>
              </div>
              <div className="cta-action mt-0">
                {!submitted ? (
                  <>
                    <div class="mb-32">
                      <h4 class="text-color-primary mb-4 mt-4">
                        Yêu cầu tư vấn
                      </h4>
                      <div
                        class="text-black text-xs"
                        style={{ textAlign: "left" }}
                      >
                        Chuyên viên tư vấn sẽ gọi lại cho bố/mẹ trong vòng 5-10
                        phút
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 400,
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
                        id="questionName"
                        placeholder="Để tiện xưng hô"
                      />
                    </div>
                    <div
                      style={{
                        marginTop: 16,
                        display: "flex",
                        flexDirection: "column",
                        maxWidth: 400,
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
                        id="questionNumber"
                        placeholder="Để liên hệ nhanh nhất"
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
                        Tư vấn ngay
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

            <div className="question-image">
              <Image
                src={require("./../../assets/images/san-pham/doctor1.png")}
                alt="Features split 01"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Question.propTypes = propTypes;
Question.defaultProps = defaultProps;

export default Question;
