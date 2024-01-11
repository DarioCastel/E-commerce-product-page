import "../css/headMain.css";
import ImgAvatar from "../img/image-avatar.png";

const headMain = () => {
  return (
    <>
      <div className="headContainer">
        <div className="headElementsLeft">
          <div className="headtitle">sneakers</div>
          <div className="headButtons">
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="headElementsRight">
          <div className="shopCart">carringui</div>
          <div className="headAvatar">
            <img src={ImgAvatar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default headMain;
