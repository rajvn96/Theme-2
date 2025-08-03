import { useState } from "react";
import "./Home.css";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="homepage-container">
      <div className="header">
        <div className="left-header">
          <div className="hamburger" onClick={toggleSidebar}>
            ☰
          </div>
        </div>
      </div>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Sale</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="new-arrivals">New Arrivals, 2024</div>
        <h1>Your Source for Trendsetting Fashion</h1>
        <p>
          Whether you're looking for bold statements or timeless classics, our selection
          offers something for every fashion-forward individual. Stay stylish, stay ahead,
          and find your next favorite outfit here.
        </p>
        <button className="cta">New Collection</button>
      </div>
    </div>
  );
};

export default HomePage;
