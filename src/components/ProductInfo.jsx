import { useState } from "react";
import "../css/productInfo.css";
import Minus from "../img/icon-minus.svg"
import Plus from "../img/icon-plus.svg"

const ProductInfo = ({companyName, productName, description, priceList, discount}) => {
  const [cont, setCont] = useState(0)

  const handlerMinus = ()=>{
    if(cont==0){
      cont
    }
    else{
      setCont(cont-1)
    }
  }

  const handlerPlus=()=>{
    setCont(cont+1)
  }

  return (
    
    <>
      <div className="productInfoContainer">
        <span className="titleCompany">{companyName}</span>
        <h1>{productName}</h1>
        <span className="descriptionProduct">
          {description}
        </span>
        <div className="priceContainer">
          <div className="priceCalculated">
            <span className="actualPrice">{"$"}{(priceList-priceList*discount).toFixed(2)}</span>
            <span className="discountPrice">{discount*100}{"%"}</span>
          </div>
          <span className="priceList">{(priceList).toFixed(2)}</span>
        </div>
        <div className="cantCartContainer">
          <div className="itemUnits">
            <button className="minusButton" onClick={handlerMinus}><img src={Minus} alt="" /></button>
            <span className="quantityProduct">{cont}</span>
            <button className="plusButton" onClick={handlerPlus}><img src={Plus} alt="" /></button>
          </div>
          <button className="addButton">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
