import React, { useState } from "react";
function Menu() {
  const [data, setData] = [
    {
      name: "Sân bóng Cửu Long",
      address: "119 Trần Văn Dư, Phường 15, Tân Bình, Thành phố Hồ Chí Minh",
      phone: "0333 118 899",
      imgPitch: "",
      imgOwner: "",
      pitch: [
        {
          name: "Sân CL 001",
          tpye: "Sân 5",
          time: [
            {
              eachTime: "7h00 - 8h00",

              sale: 50,
              status: true,
            },
            {
              eachTime: "8h00 - 9h00",

              sale: 1,
              status: true,
            },
            {
              eachTime: "9h00 - 10h00",

              sale: 10,
              status: true,
            },
            {
              eachTime: "10h00 - 11h00",

              sale: 20,
              status: true,
            },
            {
              eachTime: "14h00 - 15h00",

              sale: 10,
              status: true,
            },
            {
              eachTime: "15h00 - 16h00",

              sale: 1,
              status: true,
            },
            {
              eachTime: "16h00 - 17h00",

              sale: 1,
              status: true,
            },
            {
              eachTime: "17h00 - 18h00",

              sale: 30,
              status: true,
            },
            {
              eachTime: "18h00 - 19h00",
              sale: 20,
              status: true,
            },
            {
              eachTime: "19h00 - 20h00",
              sale: 10,
              status: true,
            },
          ],
          img: "",
        },
        {
          name: "Sân CL 002",
          tpye: "Sân 7",
          time: [
            {
              eachTime: "7h00 - 8h00",
              sale: 50,
              status: true,
            },
            {
              eachTime: "8h00 - 9h00",
              sale: 1,
              status: false,
            },
            {
              eachTime: "9h00 - 10h00",
              sale: 10,
              status: true,
            },
            {
              eachTime: "10h00 - 11h00",
              sale: 20,
              status: false,
            },
            {
              eachTime: "14h00 - 15h00",
              sale: 10,
              status: true,
            },
            {
              eachTime: "15h00 - 16h00",
              sale: 1,
              status: false,
            },
            {
              eachTime: "16h00 - 17h00",
              sale: 1,
              status: true,
            },
            {
              eachTime: "17h00 - 18h00",
              sale: 30,
              status: true,
            },
            {
              eachTime: "18h00 - 19h00",
              sale: 20,
              status: false,
            },
            {
              eachTime: "19h00 - 20h00",
              sale: 10,
              status: true,
            },
          ],
          img: "",
        },
        {
          name: "Sân CL 003",
          tpye: "Sân 11",
          time: [
            {
              eachTime: "7h00 - 8h00",
              sale: 50,
              status: false,
            },
            {
              eachTime: "8h00 - 9h00",
              sale: 1,
              status: true,
            },
            {
              eachTime: "9h00 - 10h00",
              sale: 10,
              status: false,
            },
            {
              eachTime: "10h00 - 11h00",
              sale: 20,
              status: false,
            },
            {
              eachTime: "14h00 - 15h00",
              sale: 10,
              status: true,
            },
            {
              eachTime: "15h00 - 16h00",
              sale: 1,
              status: false,
            },
            {
              eachTime: "16h00 - 17h00",
              sale: 1,
              status: true,
            },
            {
              eachTime: "17h00 - 18h00",
              sale: 30,
              status: true,
            },
            {
              eachTime: "18h00 - 19h00",
              sale: 20,
              status: false,
            },
            {
              eachTime: "19h00 - 20h00",
              sale: 10,
              status: true,
            },
          ],
          img: "",
        },
      ],
    },
  ];
  function choiceStartDate() {
    let value = document.getElementById("startChoise").value;
    let select = document.getElementById("timeIndate");
    select.innerHTML = null;
    let startDate = value.split("h")[0];
    console.log(startDate);
    for (let i = startDate; i < 23; i++) {
      select.insertAdjacentHTML(
        "beforeend",
        `<option>${i}h00 - ${parseInt(i) + 1}h00</option>`
      );
    }
  }
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

      <div className="managePitch">
        <div className="eachPitch">
          <h1 className="">Quản Lý Sân Cửu Long</h1>
          <div className="editPitch">
            <div className="desName">
              <p>Sân bóng :</p>
              <input
                id="txtName"
                className="active"
                type="text"
                value="Sân Cửu Long"
                readOnly
              />
            </div>
            <div className="desName">
              <p>Địa chỉ :</p>
              <input
                id="txtAddress"
                className="active"
                style={{
                  width: 700,
                }}
                type="text"
                value="119 Trần Văn Dư, Phường 15, Tân Bình, Thành phố Hồ Chí Minh"
                readOnly
              />
            </div>
            <div className="desName">
              <p>Số điện thoại: </p>
              <input
                id="txtPhone"
                className="active"
                type="text"
                value="0333 118 899"
                readOnly
              />
            </div>
            <p className="childrenPitchTittle">Các sân con:</p>
            <div className="childPitch">
              <div className="childImg">
                <img src="https://conhantaogreengo.com/wp-content/uploads/2020/02/goc-da-phat.gif" />
              </div>
              <div className="manager">
                <div className="childManage">
                  <p>Sân: </p>
                  <input className="active" type="text" value="CL001" />
                </div>
                <div className="childManage">
                  <p>Loại sân: </p>
                  <select disabled>
                    <option>Sân 5</option>
                    <option>Sân 7</option>
                    <option>Sân 11</option>
                  </select>
                </div>
                <div className="childManage">
                  <p>Giờ bắt đầu:</p>
                  <select onClick={() => choiceStartDate()} id="startChoise">
                    <option>7h00</option>
                    <option>8h00</option>
                    <option>9h00</option>
                    <option>10h00</option>
                    <option>11h00</option>
                    <option>12h00</option>
                    <option>13h00</option>
                    <option>14h00</option>
                    <option>15h00</option>
                    <option>16h00</option>
                    <option>17h00</option>
                    <option>18h00</option>
                  </select>
                </div>
                <div className="childManage">
                  <p>Giờ trong ngày: </p>
                  <select id="timeIndate">
                    <option>7h00</option>
                    <option>8h00</option>
                    <option>9h00</option>
                    <option>10h00</option>
                    <option>11h00</option>
                    <option>12h00</option>
                    <option>13h00</option>
                    <option>14h00</option>
                    <option>15h00</option>
                    <option>16h00</option>
                    <option>17h00</option>
                    <option>18h00</option>
                  </select>
                  <p
                    style={{
                      marginLeft: 20,
                    }}
                  >
                    Khuyến mãi
                  </p>
                  <input
                    style={{
                      width: 100,
                    }}
                    value="10"
                    type="number"
                  />
                </div>
                <div className="childManage">
                  <p>Giá:</p>
                  <input
                    className="active"
                    style={{
                      width: 100,
                    }}
                    type="number"
                    value="350.000"
                  />
                  <p
                    style={{
                      marginLeft: -30,
                    }}
                  >
                    vnđ
                  </p>
                </div>
                <div className="btnAction">
                  <button>Thay đổi</button>
                  <button>Hủy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
