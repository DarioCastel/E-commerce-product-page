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

const Portal = ({ setPortal }) => {
  const [photoMain, setPhotoMain] = useState(Product1);
  return createPortal(
    <>
      <div className="portalContainer">
        <div
          className="close"
          onClick={() => {
            setPortal(false);
          }}
        >
          <img src={Close} alt="" />
        </div>
        <div className="containerImgPortal">
          <div className="galeryContainerPortal">
            <div className="previewMainPortal">
              <img src={photoMain} alt="" />
            </div>
            <div className="smallPreviewContainerPortal">
              <span className="previewPhoto1Portal">
                <img
                  src={Thumb1}
                  alt=""
                  onClick={() => {
                    setPhotoMain(Product1);
                  }}
                />
              </span>
              <span className="previewPhoto2Portal">
                <img
                  src={Thumb2}
                  alt=""
                  onClick={() => {
                    setPhotoMain(Product2);
                  }}
                />
              </span>
              <span className="previewPhoto3Portal">
                <img
                  src={Thumb3}
                  alt=""
                  onClick={() => {
                    setPhotoMain(Product3);
                  }}
                />
              </span>
              <span className="previewPhoto4Portal">
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
        </div>
      </div>
    </>,
    document.getElementById("portalImg")
  );
};

export default Portal;
