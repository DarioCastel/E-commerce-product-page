import "../css/galery.css";
import { useState } from "react";
import Portal from "../portals/Portal"
import Thumb1 from "../img/image-product-1-thumbnail.jpg"
import Thumb2 from "../img/image-product-2-thumbnail.jpg"
import Thumb3 from "../img/image-product-3-thumbnail.jpg"
import Thumb4 from "../img/image-product-4-thumbnail.jpg"
import Product1 from "../img/image-product-1.jpg"
import Product2 from "../img/image-product-2.jpg"
import Product3 from "../img/image-product-3.jpg"
import Product4 from "../img/image-product-4.jpg"


const Galery = () => {

  const [photoMain, setPhotoMain] = useState(Product1)
  const [isPortalOpen, setIsPortalOpen] = useState(false)

  const handlerImgClick = ()=>{
    setIsPortalOpen(true);
  }

  return (
    <>
      {isPortalOpen&&<Portal setPortal={setIsPortalOpen}/>}
      
      <div className="galeryContainer">
        <div className="previewMain">
          <img src={photoMain} alt="" onClick={()=>{handlerImgClick()}}/>
        </div>
        <div className="smallPreviewContainer">
          <span className="previewPhoto1">
            <img src={Thumb1} alt="" onClick={()=>{setPhotoMain(Product1)}}/>
          </span>
          <span className="previewPhoto2">
          <img src={Thumb2} alt="" onClick={()=>{setPhotoMain(Product2)}}/>
          </span>
          <span className="previewPhoto3">
          <img src={Thumb3} alt="" onClick={()=>{setPhotoMain(Product3)}}/>
          </span>
          <span className="previewPhoto4">
          <img src={Thumb4} alt="" onClick={()=>{setPhotoMain(Product4)}}/>
          </span>
        </div>
      </div>
    </>
  );
};

export default Galery;
