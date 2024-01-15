import "../css/headMain.css";
import ImgAvatar from "../img/image-avatar.png";
import Logo from "../img/logo.svg"
import Cart from "../img/icon-cart.svg"

const headMain = () => {
  return (
    <>
      <div className="headContainer">
        <div className="headElementsLeft">
          <div className="headTitle">
            <img src={Logo} alt="" />
          </div>
          <div className="headButtons">
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="headElementsRight">
          <div className="shopCart">
            <img src={Cart} alt="" />
            <span className="contCart">0</span>
          </div>
          <div className="headAvatar">
            <img src={ImgAvatar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default headMain;
