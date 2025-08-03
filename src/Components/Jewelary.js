import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Jewelery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
    <div><h2>Jewelery</h2></div>
    <div className="Product-cards">
        {products.map((item) => (
          <ProductCard key={item.id+13} ProductData={item}/>
        ))}
    </div>
    </div>
  );
};

export default Jewelery;
