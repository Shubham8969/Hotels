import React from 'react'

const About = () => {
  return (
    <>
        <section id='aboutUs_mini'>
            <div className="first_container">
                <div className="content">
                <h1>ABOUT US</h1>
                <p>At [Luxery Rentals], we believe luxury is found in the details. From stunning coastal retreats to serene mountain escapes, </p>
                
                </div>
                <button>We strive to offer you best possible home to stay</button>
            </div>
            <div className="second_container">
                 <div className="image_1">
                  <img src="/people.jpg" alt="people" />
                 </div>
                 <div className="image_2">
                  <img src="/people2.jpg" alt="people" />
                 </div>
            </div>

        </section>
    </>
  )
}

export default About