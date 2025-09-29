function ProductList({ products, setProducts}) {
    const handledelit=(indexToRemove)=>{
        setProducts(products.filter((_, i) => i !== indexToRemove)); 
    }
    return (
    <table  className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map((p, i) => (
            <tr key={i}>
                <td>{p.name}</td> 
                <td>${p.price}</td> 
                <td>(x{p.quantity})</td> 
                <td>
                    <button className="btn btn-danger"  onClick={() => handledelit(i)}>delete</button>
                    {/*delete runs when the button is clicked if we use arrow func*/}
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    );
  }
  
  export default ProductList;
  