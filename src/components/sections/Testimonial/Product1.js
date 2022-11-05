import React, { useState } from "react";
import Image from "../../elements/Image";
import Modal from "react-modal";

export const Product1 = () => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setModalActive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setModalActive(false);
  };

  return (
    <>
      <div className="tiles-item-inner has-shadow" onClick={openModal}>
        <div className="testimonial-item-content">
          <Image
            src={require("./../../../assets/images/san-pham/san-pham-2.png")}
            alt="Features split 02"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="testimonial-item-footer text-color-primary text-xs mt-32 mb-0 has-top-divider">
          COLOS GROW IQ OHIRO
        </div>
      </div>
      <Modal isOpen={modalActive} onRequestClose={closeModal}>
        <button
          className="modal-close"
          aria-label="close"
          onClick={closeModal}
        ></button>
        <div className="product-detail" style={{ display: "flex" }}>
          <div className="" style={{ maxWidth: 600 }}>
            <Image
              src={require("./../../../assets/images/san-pham/san-pham-2.png")}
              alt="Features split 02"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div id="content">
            <p>
              Colos Grow IQ&nbsp;là sản phẩm cao cấp chuyên biệt dành cho trẻ
              Tăng Cường Phát Triển Chiều Cao&nbsp;- Trí Não
            </p>
            <p>LỢI ÍCH CỦA COLOS GROW IQ</p>
            <p>
              - Hỗ trợ phát triển trí thông minh và tăng cường nhận thức ở trẻ.
            </p>
            <p>- Tăng cường phát triển khung xương, phát triển chiều cao.</p>
            <p>- Hỗ trợ trẻ tăng cường sức đề kháng.</p>
            <p>HỆ DƯỠNG CHẤT</p>
            <p>
              Hệ dưỡng chất độc đáo Colos Grow IQ gồm Sữa non, MK7, DHA, Canxi,
              Lactoferrin, Vitamin, Lysine, Taurine và các khoáng chất
            </p>
            <p>- dưỡng chất thiết yếu cho sự phát triển của trẻ:</p>
            <p>
              - Palatinoise và DHA hỗ trợ trẻ phát triển trí não, tăng cường
              nhận thức.
            </p>
            <p>
              - MK7, Canxi thủy phân hữu cơ, và Canxi nano vitamin D hỗ trợ trẻ
              phát triển chiều cao tối ưu, cho khung xương chắc khỏe.
            </p>
            <p>
              - Bổ sung nhiều Vitamin khoáng chất và Lactium hỗ trợ trẻ tăng
              cường tiêu hóa, tạo giấc ngủ, phát triển thể lực.
            </p>
            <p>CÁCH SỬ DỤNG</p>
            <p>Mở gói và hòa với 40 - 50ml nước ấm 38-40 độ, khuấy đều.</p>
            <p>Sau khi pha nên cho bé dùng luôn trong vòng 1 giờ.</p>
            <p>Gói đã mở nên sử dụng trong vòng 24 giờ.</p>
            <p>Dành cho trẻ từ 6 - 36 tháng</p>
            <p>Lượng dùng tùy theo nhu cầu dinh dưỡng cụ thể của bé.</p>
            <p>QUY CÁCH ĐÓNG GÓI</p>
            <p>Hộp 24&nbsp;gói x 13g.</p>
            <p>
              Hạn sử dụng: 24&nbsp;tháng kể từ ngày sản xuất. Chi tiết xem trên
              bao bì.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
