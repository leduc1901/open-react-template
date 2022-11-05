import React, { useState } from "react";
import Image from "../../elements/Image";
import Modal from "react-modal";

export const Product2 = () => {
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
            src={require("./../../../assets/images/san-pham/san-pham-1.png")}
            alt="Features split 02"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="testimonial-item-footer text-color-primary text-xs mt-32 mb-0 has-top-divider">
          COLOS PROBIOTIC OHIRO
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
              src={require("./../../../assets/images/san-pham/san-pham-1.png")}
              alt="Features split 02"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div id="content">
            <p>MÔ TẢ SẢN PHẨM</p>
            <p>ĐẶC ĐIỂM NỔI BẬT:</p>
            <p>
              • Sữa Non&nbsp;Colos Probiotic&nbsp;là thực phẩm bổ sung cho trẻ
              từ 0- 6 tháng tuổi, cho trẻ không được bú sữa non , hệ miễn dịch
              yếu, trẻ sinh non, trẻ tiêu hóa kém, chậm tăng cân.
            </p>
            <p>
              • Sữa Non Colos Probiotic&nbsp;chứa&nbsp;dưỡng chất với hàm lượng
              cao giúp trẻ phát triển toàn diện về não bộ, chiều cao, thị giác,
              thính giác...&nbsp;
            </p>
            <p>
              • Sữa Non Colos Probiotic&nbsp;là sản phẩm bổ sung&nbsp;3 yếu tố
              miễn dịch: SỮA NON, HMO và LACTOFERIN.Trong đó, hàm lương sữa non
              cao nhất hiện nay là 14,000mg.
            </p>
            <p>
              • Sữa Non Colos Probiotic&nbsp;dễ tiêu hóa, dễ hấp thu: Chứa hàm
              lượng chất xơ cao và Bộ 5 Enzyme giúp trẻ hấp thu dinh dưỡng tối
              đa
            </p>
            <p>
              • Sữa Non Colos Probiotic chứa dưỡng chất MCT là chất béo phân tử
              ngắn, dễ tiêu hóa, hấp thu, giúp trẻ phát triển tốt trong giai
              đoạn mới chào đời.
            </p>
            <p>
              • Sữa Non Colos Probiotic được đóng gói trong các gói nhỏ tiện
              lợi, dễ bảo quản để đảm bảo chất lượng.
            </p>
            <p>&nbsp;</p>
            <p>CÔNG DỤNG:</p>
            <p>
              • Hàm lượng cao kháng thể IgG từ Sữa non và chất miễn dịch
              Lactoferrin kết hợp với chất miễn dịch HMO (2’-FL) cho trẻ hệ miễn
              dịch khỏe mạnh, tăng sức đề kháng.
            </p>
            <p>
              • Sữa Non Colos Probiotic&nbsp;giúp&nbsp;trẻ phát triển khỏe mạnh.
            </p>
            <p>
              • Sữa Non Colos Probiotic bổ sung dinh dưỡng cho trẻ từ 0-6 tháng
              tuổi bị thiếu hoặc mất sữa mẹ, giúp trẻ phát triển tốt các tố chất
              sức khỏe.
            </p>
            <p>&nbsp;</p>
            <p>ĐỐI TƯỢNG SỬ DỤNG:</p>
            <p>
              • Sữa Non Colos Probiotic dùng cho trẻ sơ sinh từ 0-12&nbsp;tháng
              tuổi
            </p>
            <p>• Đặc biệt phù hợp với:</p>
            <p>
              - Trẻ khi sinh không được bú sữa non của mẹ (khi sinh mẹ bị mất
              sữa, ít sữa, chậm có sữa hay chất lượng sữa không cao)
            </p>
            <p>- Trẻ có hệ miễn dịch yếu, thường xuyên ho sốt</p>
            <p>- Trẻ sinh non, sinh ra dưới 3kg</p>
            <p>- Trẻ hay đi ngoài phân sống, táo bón, chậm tăng cân</p>
            <p>- Trẻ tập lẫy, tập bò</p>
            <p>CÁCH SỬ DỤNG</p>
            <p>Mở gói và hòa với 40 - 50ml nước ấm 38-40 độ, khuấy đều.</p>
            <p>Sau khi pha nên cho bé dùng luôn trong vòng 1 giờ.</p>
            <p>Gói đã mở nên sử dụng trong vòng 24 giờ.</p>
            <p>Dành cho trẻ từ 0 - 12&nbsp;tháng&nbsp;</p>
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
