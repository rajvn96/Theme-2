import { logo } from "../utils/Constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header =()=>{
    const[btnName , setBtnName] = useState("Login");

    return (
        <div className="theme">
            
            <div className="header">
                <div className="logo-container">
                <Link to="/"><img className="logo" src={logo}/></Link>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>Cart</li>
                        <li>Theme1</li>
                        <li>Theme2</li>
                        <li>Theme3</li>
                        <li><button className="fancy-button"
                            onClick={()=> btnName==="Login"? setBtnName("Logout"):setBtnName("Login")}
                        > {btnName}</button></li>
                    </ul>
                </div>
            </div>
        </div>
        
    );
};

export default Header;