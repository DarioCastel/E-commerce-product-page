import "../css/productInfo.css";



const ProductInfo = () => {
  return (
    <>
      <div className="productInfoContainer">
        <span className="titleCompany">SNEAKER COMPANY</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <span className="descriptionProduct">
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, theyll withstand everything
            the weather can offer.
          </p>
        </span>
        <div className="priceContainer">
          <div className="priceCalculated">
            <span className="actualPrice">$125.00</span>
            <span className="discountPrice">%50</span>
          </div>
          <span className="priceList">$250.00</span>
        </div>
        <div className="cantCartContainer">
          <div className="itemUnits">
            <button className="minusButton">-</button>
            <span className="quantityProduct">2</span>
            <button className="plusButton">+</button>
          </div>
          <button className="addButton">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
