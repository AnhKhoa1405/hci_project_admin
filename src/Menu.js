import React from "react";
function Menu() {
  return (
    <div>
      <div className="body">
        <h1 className="menu-title">Quản lý đặt sân</h1>
        <ul>
          <li
            id="pitchMine"
            onClick={() => {
              var pitchMine = document.getElementById("pitchMine");
              pitchMine.classList.add("active");
              var pitchStaff = document.getElementById("pitchStaff");
              var setting = document.getElementById("setting");
              pitchStaff.classList.remove("active");
              setting.classList.remove("active");
            }}
            className="item-menu active"
          >
            Sân của bạn
          </li>
          <li
            onClick={() => {
              var pitchMine = document.getElementById("pitchMine");
              pitchMine.classList.remove("active");
              var pitchStaff = document.getElementById("pitchStaff");
              var setting = document.getElementById("setting");
              pitchStaff.classList.add("active");
              setting.classList.remove("active");
            }}
            id="pitchStaff"
            className="item-menu"
          >
            Quản lý sân
          </li>
          <li
            onClick={() => {
              var pitchMine = document.getElementById("pitchMine");
              pitchMine.classList.remove("active");
              var pitchStaff = document.getElementById("pitchStaff");
              var setting = document.getElementById("setting");
              pitchStaff.classList.remove("active");
              setting.classList.add("active");
            }}
            id="setting"
            className="item-menu"
          >
            Cài đặt
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="pitchOfMe">
          <h1>Sân của bạn</h1>
          <div
            style={{
              display: "flex",
            }}
          >
            <div className="itemPitch">
              <div className="itemPitchInfo">
                <h3>Sân bóng Hoa Lư</h3>
                <p>Chủ sân: Ông Thanh Tú</p>
              </div>
              <div className="itemPitchDescription">
                <div className="img-avatar"></div>
                <p>
                  Địa chỉ: 30 Phan Thúc Duyện, Phường 4, Tân Bình, Thành phố Hồ
                  Chí Minh
                </p>
                <a href="#">Điện thoại: 0777 700 000</a>
              </div>
              <div className="itemPitchChoose">
                <img src="./delete.png" />
                <img src="./setting.png" />
              </div>
            </div>
            <div className="itemPitch">
              <div className="itemPitchInfo bg-item">
                <h3>Sân bóng Cửu Long</h3>
                <p>Chủ sân: Ông Thanh Tú</p>
              </div>
              <div className="itemPitchDescription">
                <div className="img-avatar"></div>
                <p>
                  Địa chỉ: 119 Trần Văn Dư, Phường 15, Tân Bình, Thành phố Hồ
                  Chí Minh 700000
                </p>
                <a href="#">Điện thoại: 0333 118 899</a>
              </div>
              <div className="itemPitchChoose">
                <img src="./delete.png" />
                <img src="./setting.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
