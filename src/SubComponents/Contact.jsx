import React from "react";
import { Link } from "react-router-dom";
import { RiInstagramLine, RiFacebookBoxLine } from 'react-icons/ri';
const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
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
            <span>Adityapur -2 Jmashedpur </span>
          </div>
          <div>
            <p>State </p>
            <span>Jharkhand 831014 </span>
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
        
        <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form>
            <div>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email"/>
            </div>
            <textarea rows="4" placeholder="Your Message..."/>
            <button type="submit">SEND</button>
          </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;