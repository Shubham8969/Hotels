import React from "react";
import { RiInstagramLine, RiFacebookBoxLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
          similique voluptas!
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+91 8969864535</span>
              </div>
              <div>
                <p>Email</p>
                <span>Shubham@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>Adityapur-2 Jamshedpur</span>
              </div>
              <ul>
                   <li>
                   <Link to="https://www.instagram.com/shub_ham___/" target="_blank" rel="noopener noreferrer">
                   <RiInstagramLine />
                   </Link>
                   </li>
                   <li>
                     <a href="https://www.facebook.com/your_facebook_id" target="_blank" rel="noopener noreferrer">
                     <RiFacebookBoxLine />
                     </a>
                    </li>
         </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;