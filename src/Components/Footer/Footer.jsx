import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
 const location = useLocation();
 const isHomePage = location.pathname === "/";
  return (
    <>
       <footer className={isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer" }>
         <div className="conatiner">
          <h4>LUXURY RENTALS</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, dignissimos. Vitae velit cupiditate beatae odit ab.</p>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/termsandconditions'}>Term And Conditions</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
         </div>
         <div className="container">
          <h4>Connect with us</h4>
          <p>+91 8969864535</p>
          <p>Shubham@gmail.com</p>
          <p>All Rights Reserved By CodewithShubh!</p>
         </div>
       </footer>
    </>
  )
}

export default Footer