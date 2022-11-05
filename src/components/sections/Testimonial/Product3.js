import React, { useState } from "react";
import Image from "../../elements/Image";
import Modal from "react-modal";

export const Product3 = () => {
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
            src={require("./../../../assets/images/san-pham/san-pham-3.png")}
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
              src={require("./../../../assets/images/san-pham/san-pham-3.png")}
              alt="Features split 02"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div id="content">
            <p>&nbsp;</p>
            <p>
              Colos&nbsp;Pedia Plus&nbsp;là sản phẩm cao cấp chuyên biệt dành
              cho trẻ biếng ăn, chậm lên cân&nbsp;
            </p>
            <p>LỢI ÍCH CỦA COLOS&nbsp;PEDIA PLUS&nbsp;</p>
            <p>- Hỗ trợ bé ăn ngoan, hợp tác</p>
            <p>
              - Hỗ trợ cải thiện hệ tiêu hóa và đường ruột, tăng cường trao đổi
              chất hấp thu dinh dưỡng.
            </p>
            <p>- Hỗ trợ bé tăng cường dề kháng,&nbsp;bắt kịp đà tăng trưởng.</p>
            <p>- Cải thiện tình trạng biếng ăn, hỗ trợ phục hồi thể trạng</p>
            <p>&nbsp;</p>
            <p>HỆ DƯỠNG CHẤT</p>
            <p>
              Hệ dưỡng chất độc đáo Colos&nbsp;Pedia Plus&nbsp;gồm Sữa non,
              Lactoferrin, 2'-FL HMO, MCT, Chất xơ FOS, Tinh chất Men bia và các
              dưỡng chất thiết yếu cho sự phát triển của trẻ:
            </p>
            <p>
              - Lactoferrin: Tăng cường sự hấp thu sắt ở trẻ hóp phần tiêu diệt
              vi khuẩn cần sắt, đặc biệt quan trọng với hệ tiêu hóa của trẻ.
            </p>
            <p>
              - 2'-FL HMO: Tăng cường khả năng miễn dịch của trẻ, giúp trẻ khỏe
              mạnh trước các nguy cơ gây bệnh trong độ tuổi nhạy cảm
            </p>
            <p>
              - Lysine, Tinh chất Men bia, hàm lượng cao FOS hiêp đồng hỗ trợ
              trẻ tăng cường tiêu hóa, tăng cường hấp thu, trẻ ăn ngoan, hợp tác
            </p>
            <p>
              - Ngoài ra còn bổ sung Canxi thủy phân hữu cơ, Vitamin D3, DHA
              giúp trẻ phát triển chiều cao và trí não toàn diện. Và&nbsp;còn
              rất nhiều các dưỡng chất khác hỗ trợ trẻ phát triển thể
              chất.&nbsp;
            </p>
            <p>CÁCH SỬ DỤNG</p>
            <p>Mở gói và hòa với 40 - 50ml nước ấm 38-40 độ, khuấy đều.</p>
            <p>Sau khi pha nên cho bé dùng luôn trong vòng 1 giờ.</p>
            <p>Gói đã mở nên sử dụng trong vòng 24 giờ.</p>
            <p>Dành cho trẻ từ 6 - 36 tháng&nbsp;</p>
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
