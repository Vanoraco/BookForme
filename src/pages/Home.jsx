import React from "react";
import { Link } from "react-router-dom";
const Home = () => { 
     return (    
     <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>   
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>  
            <p style={{ fontSize: "18px", marginBottom: "30px" }}>        This project was generated By{" "}  
                      <a href="#" style={{ color: "#87CEFA", textDecoration: "none" }}>          Dhiwise        </a>        . Quickly use below links to navigate through all pages.      </p>      <ul style={{ listStyle: "none", padding: "0" }}>        <li style={{ marginBottom: "10px" }}>          <Link to="/bakudiscount" style={{ color: "#87CEFA", textDecoration: "none" }}>            Bakudiscount          </Link>        </li>        <li style={{ marginBottom: "10px" }}>          <Link to="/home1" style={{ color: "#87CEFA", textDecoration: "none" }}>            Home1          </Link>        </li>        <li style={{ marginBottom: "10px" }}>          <Link to="/homeone" style={{ color: "#87CEFA", textDecoration: "none" }}>            HomeOne          </Link>        </li>        <li style={{ marginBottom: "10px" }}>          <Link to="/screen" style={{ color: "#87CEFA", textDecoration: "none" }}>            Screen</Link>        </li>        <li style={{ marginBottom: "10px" }}>          <Link to="/bodythemeagoda" style={{ color: "#87CEFA", textDecoration: "none" }}>            Bodythemeagoda          </Link>        </li>        <li style={{ marginBottom: "10px" }}>          <Link to="/hotel" style={{ color: "#87CEFA", textDecoration: "none" }}>        
    Hotel          </Link>        </li>      </ul>    </div>  );};export default Home;