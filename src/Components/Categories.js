import { useState } from "react";
import { menWear, womenWear, acc, elec } from "../utils/Constants";
import { shopProductData } from "./shopData";
import Men from "./MensClothing";
import { Link } from "react-router";


const Categories=()=>{
    const data = shopProductData;
    const [filteredList, setFilteredList] = useState([]);
    return(
        <div>
        <div className="sub">
            <h2>Categories</h2>
        </div>
        <section className="category-cards">
            <div className="card">
               <Link to="/category/men"> <img src={menWear} alt="Men Collection" 
                    onClick={()=>{
                        <Men/>
                    }}
                /></Link>
                <div className="overlay">
                <h3>For Him</h3>
                </div>
            </div>

            <div className="card">
                <Link to ="/category/women"><img src={womenWear} alt="Women Collection" /></Link>
                <div className="overlay">
                <h3>For Her</h3>
                </div>
            </div>

            <div className="card">
                <Link to ="/category/jewelery"><img src={acc} alt="Accessories" /></Link>
                <div className="overlay">
                <h3>Jewellary</h3>
                </div>
            </div>

            <div className="card">
                <Link to="/category/electronics"><img src={elec} alt="Electronics" /></Link>
                <div className="overlay">
                <h3>Electronics</h3>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Categories;
