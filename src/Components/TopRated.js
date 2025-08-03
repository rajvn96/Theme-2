import { useState, useEffect } from "react";
import { API_URL } from "../utils/Constants";
import ProductCard from "./ProductCard";

const TopRated = () => {
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
        <div>
            <div>
                <h2>Top Rated</h2>
            </div>
            <div className="Product-cards">
                {shopData
                .filter((item) => item.rating.rate > 4)
                .map((item) => (
                <ProductCard key={item.id + 13} ProductData={item} />
                     )
                    )
                }
        </div>
      </div>
    );
  };
  
  export default TopRated;

