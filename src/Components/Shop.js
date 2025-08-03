import { useState, useEffect } from "react";
import { API_URL } from "../utils/Constants";
import ProductCard from "./ProductCard";

const Shop = () => {
    const [shopData, setShopData] = useState([]);
  
    const fetchData = async () => {
      const data = await fetch(API_URL);
      const json = await data.json();
      setShopData(json);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    return (
        <div className="shopp">
            <div className="shop-head">
                <h1>Shop</h1>
            </div>
            <div className="Product-cards">
            {shopData.length > 0 &&
            shopData.map((item) => (
                <ProductCard key={item.id+13} ProductData={item} />
            ))}
            </div>
        </div>
    );
  };
  
  export default Shop;