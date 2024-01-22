import BodyMain from "./components/BodyMain";
import HeadMain from "./components/HeadMain";
import "./app.css";
import { CartProvider } from "./context/contentCart";

function App() {
  return (
    <>
      <main>
        <CartProvider>
          <HeadMain />
          <BodyMain />
        </CartProvider>
      </main>
    </>
  );
}

export default App;
