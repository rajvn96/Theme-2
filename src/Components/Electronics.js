import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Electronics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
    <div><h2>Electronics</h2></div>
    <div className="Product-cards">
        {products.map((item) => (
          <ProductCard key={item.id+13} ProductData={item}/>
        ))}
    </div>
    </div>
  );
};

export default Electronics;
