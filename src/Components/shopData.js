import { useEffect, useState } from "react";
import { API_URL } from "../utils/Constants"; 

export const shopProductData = () => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const json = await res.json();
      setShopData(json);
    };

    fetchData();
  }, []);

  return [shopData];
};

