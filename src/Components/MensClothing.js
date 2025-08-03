import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // <-- loading state added

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent("men's clothing")}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // <-- mark loading as false after data is fetched
      });
  }, []);

  if (loading) return <Shimmer />; // <-- show shimmer while loading

  return (
    <div>
      <h2>Men's Clothing</h2>
      <div className="Product-cards">
        {products.map((item) => (
          <ProductCard key={item.id + 13} ProductData={item} />
        ))}
      </div>
    </div>
  );
};

export default Men;
