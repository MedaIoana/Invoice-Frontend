import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="home">
      <p className="welcome">Welcome!</p>
      <div className="buttons">
        <button className="btn" onClick={() => navigate("/all")}>
          See all invoices
        </button>
        <button className="btn" onClick={() => navigate("/new")}>
          Create new invoice
        </button>
      </div>
    </div>
  );
};

export default Home;
