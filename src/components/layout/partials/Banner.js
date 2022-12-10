import React, { useState } from "react";

const Banner = ({ ...props }) => {
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      <div class="sticky-container">
        <ul class="sticky">
          <li>
            <a target={"_blank"} href="https://m.me/vibeyeu.com.vn">
              <img
                width="32"
                height="32"
                title=""
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/2048px-Facebook_Messenger_logo_2018.svg.png"
              />
              <p>Messenger</p>
            </a>
          </li>
          <li>
            <a target={"_blank"} href="https://zalo.me/0973878338">
              <img
                width="32"
                height="32"
                title=""
                alt=""
                src="https://i2.wp.com/ocd.vn/wp-content/uploads/2020/04/zalo1-ID1338.jpg?fit=512%2C512&ssl=1"
              />
              <p>Zalo</p>
            </a>
          </li>
          <li>
            <a href="tel://0973878338">
              <img
                width="32"
                height="32"
                title=""
                alt=""
                src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360"
              />
              <p>Phone</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Banner;
