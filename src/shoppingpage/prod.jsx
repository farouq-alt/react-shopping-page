import { useRef } from "react";

function Prod({products, setProducts}) {
  const prodname = useRef();
  const price = useRef();
  const qte = useRef();

  const handleAdd = () => {
    const newProduct = {
      name: prodname.current.value,
      price: price.current.value,
      quantity: qte.current.value,
    };

    setProducts([...products, newProduct]);

    prodname.current.value = "";
    price.current.value = "";
    qte.current.value = "";
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="product name"
        ref={prodname}
      />

      <input
        type="text"
        className="form-control"
        placeholder="price"
        ref={price}
      />

      <input
        type="text"
        className="form-control"
        placeholder="quantity"
        ref={qte}
      />

      <button className="btn btn-primary mt-2" onClick={handleAdd}>
        Add
      </button>

    </div>
  );
}

export default Prod;
