import "../css/bodyMain.css";
import Galery from "./Galery";
import ProductInfo from "./ProductInfo";

const BodyMain = () => {
  return (
    <>
    <div className="bodyContainer">
      <Galery/>
      <ProductInfo/>
    </div>
    </>
  );
};

export default BodyMain;
