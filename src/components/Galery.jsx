import "../css/galery.css";
import Thumb1 from "../img/image-product-1-thumbnail.jpg"
import Thumb2 from "../img/image-product-2-thumbnail.jpg"
import Thumb3 from "../img/image-product-3-thumbnail.jpg"
import Thumb4 from "../img/image-product-4-thumbnail.jpg"
import Product1 from "../img/image-product-1.jpg"

const Galery = () => {
  return (
    <>
      <div className="galeryContainer">
        <div className="previewMain">
          <img src={Product1} alt="" />
        </div>
        <div className="smallPreviewContainer">
          <span className="previewPhoto1">
            <img src={Thumb1} alt="" />
          </span>
          <span className="previewPhoto2">
          <img src={Thumb2} alt="" />
          </span>
          <span className="previewPhoto3">
          <img src={Thumb3} alt="" />
          </span>
          <span className="previewPhoto4">
          <img src={Thumb4} alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Galery;
