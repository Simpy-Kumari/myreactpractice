import React from "react";
 import Header from "./Header";
 import Article from "./Article";
 import Nav from "./Nav";
 import SideBar from "./SideBar";
 import Footer from "./Footer";
 import "./MainLayout.css";

 const MainLayout = () => {
     return(
        <div className="main-container">
        <Header/>
        <Article/>
        <Nav/>
        <SideBar/>
        <Footer/>
        </div>
     );
 }
 export default MainLayout;