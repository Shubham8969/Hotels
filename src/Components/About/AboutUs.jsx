import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>At our core, we believe in building trust, delivering excellence, and creating solutions that enhance your life every step of the way. From innovative ideas to unwavering support, we’re committed to making a difference where it matters most.</p>
          <p>Our mission is simple: to provide exceptional service and ensure that your journey with us is smooth, fulfilling, and memorable. With a passionate team and a customer-first approach, we aim to exceed your expectations every time.</p>
          <p>Join us on this journey and experience the perfect blend of innovation, care, and reliability—because you deserve nothing but the best.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;