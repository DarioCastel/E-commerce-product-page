import { createPortal } from "react-dom";
import "../css/portal.css";
import Thumb1 from "../img/image-product-1-thumbnail.jpg";
import Thumb2 from "../img/image-product-2-thumbnail.jpg";
import Thumb3 from "../img/image-product-3-thumbnail.jpg";
import Thumb4 from "../img/image-product-4-thumbnail.jpg";
import Product1 from "../img/image-product-1.jpg";
import Product2 from "../img/image-product-2.jpg";
import Product3 from "../img/image-product-3.jpg";
import Product4 from "../img/image-product-4.jpg";
import { useState } from "react";
import Close from "../img/icon-close.svg";
import Prev from "../img/icon-previous.svg";
import Next from "../img/icon-next.svg";

const Portal = ({ setPortal }) => {
  const [photoMain, setPhotoMain] = useState(Product1);
  return createPortal(
    <>
      <div className="portalContainer">
        <div className="containerImgPortal">
          <div className="galeryContainerPortal">
          <div
            className="close"
            onClick={() => {
              setPortal(false);
            }}
          >
            <img src={Close} alt="" />
          </div>
            <button className="prevBtn">
              <img src={Prev} alt="" />
            </button>
            <div className="imgContainerGral">
              <div className="previewMainPortal">
                <img src={photoMain} alt="" />
              </div>
              <div className="smallPreviewContainerPortal">
                <span
                  className={`previewPhoto1Portal ${
                    photoMain === Product1 ? "active" : ""
                  }`}
                >
                  <img
                    src={Thumb1}
                    alt=""
                    onClick={() => {
                      setPhotoMain(Product1);
                    }}
                  />
                </span>
                <span
                  className={`previewPhoto2Portal ${
                    photoMain === Product2 ? "active" : ""
                  }`}
                >
                  <img
                    src={Thumb2}
                    alt=""
                    onClick={() => {
                      setPhotoMain(Product2);
                    }}
                  />
                </span>
                <span
                  className={`previewPhoto3Portal ${
                    photoMain === Product3 ? "active" : ""
                  }`}
                >
                  <img
                    src={Thumb3}
                    alt=""
                    onClick={() => {
                      setPhotoMain(Product3);
                    }}
                  />
                </span>
                <span
                  className={`previewPhoto4Portal ${
                    photoMain === Product4 ? "active" : ""
                  }`}
                >
                  <img
                    src={Thumb4}
                    alt=""
                    onClick={() => {
                      setPhotoMain(Product4);
                    }}
                  />
                </span>
              </div>
            </div>
            <button className="nextBtn">
              <img src={Next} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portalImg")
  );
};

export default Portal;
