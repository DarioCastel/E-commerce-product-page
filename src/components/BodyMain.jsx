import "../css/bodyMain.css";
import Galery from "./Galery";
import ProductInfo from "./ProductInfo";
import Product1 from "../img/image-product-1.jpg"
import Product1thumb from "../img/image-product-1-thumbnail.jpg"
import Product2 from "../img/image-product-2.jpg"
import Product2thumb from "../img/image-product-2-thumbnail.jpg"
import Product3 from "../img/image-product-3.jpg"
import Product3thumb from "../img/image-product-3-thumbnail.jpg"
import Product4 from "../img/image-product-4.jpg"
import Product4thumb from "../img/image-product-4-thumbnail.jpg"

const BodyMain = () => {

  const data=
    {
      galeryPhoto:[
        {
          idImg:1,
          imgBig:`${Product1}`,
          imgThumb:`${Product1thumb}`
        },
        {
          idImg:2,
          imgBig:`${Product2}`,
          imgThumb:`${Product2thumb}`
        },
        {
          idImg:3,
          imgBig:`${Product3}`,
          imgThumb:`${Product3thumb}`
        },
        {
          idImg:4,
          imgBig:`${Product4}`,
          imgThumb:`${Product4thumb}`
        }
      ],
      companyName:"SNEAKER COMPANY",
      productName:"Fall Limited Edition Sneakers",
      description:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, theyll withstand everything the weather can offer.",
      price:250,
      discount:0.31,
      cant:0
    }
  
  return (
    <>
    <div className="bodyContainer">
      <Galery/>
      <ProductInfo companyName={data.companyName} productName={data.productName} description={data.description} priceList={data.price} discount={data.discount}/>
    </div>
    </>
  );
};

export default BodyMain;
