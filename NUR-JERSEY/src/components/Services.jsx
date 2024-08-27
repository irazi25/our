import React from 'react';
import './styles.css';

const Services = () => {
    return (
        // <section id="services" className="services">
        //     <h2>Our Services</h2>
        //     {/* <ul>
        //         <li>Custom Jersey Design</li>
        //         <li>Fast Shipping</li>
        //         <li>Quality Assurance</li>
        //     </ul> */}

        //    <div className="jersey-types">
        //         <div className="jersey-item">
        //             <h3>Custom Jersey Design</h3>
        //             <p>Our home jersey features a classic design with vibrant colors.</p>
        //         </div>
        //         <div className="jersey-item">
        //             <h3>Fast Shipping</h3>
        //             <p>The away jersey offers a sleek look for away games.</p>
        //         </div>
        //         <div className="jersey-item">
        //             <h3>Quality Assurance</h3>
        //             <p>Our third jersey is designed for versatility and style.</p>
        //         </div>
        //     </div>
        // </section>

        

  <section id="services">

    <div className="services container">
      <div>
        <h1 className="section-title">Our <span>Services</span></h1> 
        </div>
        <div className="contact-items">

          <div className="contact-item">
            <div className="contact-info">
              <h1>Custom Jersey Design</h1>
              <h2>Unique designs, your style.</h2>
            </div> 
          </div>

           <div className="contact-item">
            <div className="contact-info">
              <h1>Fast Shipping</h1>
              <h2>Swift delivery, your order arrives.</h2>
            </div> 
          </div>


           <div className="contact-item">
            <div className="contact-info">
              <h1>Quality Assurance</h1>
              <h2>Ensuring excellence in every detail.</h2>
            </div> 
          </div>

        </div>
    </div>
  </section>



    );
};

export default Services;