import { useState } from "react";
import Prod from "./prod.jsx";
import ProductList from "./productList";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="container">
      <h1>My Store</h1>
      <Prod products={products} setProducts={setProducts} />
      <ProductList products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
