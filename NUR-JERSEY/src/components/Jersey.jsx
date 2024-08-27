import React from 'react';
import './styles.css';

const Jersey = () => {
    return (

             

        <section id="home" className="jersey">
            <div id="hero">
                <div className="hero container">
                    <div>
                        <h1>Hello <span></span></h1>
                        <h1>Wellcom To <span></span></h1>
                        <h1>NuR Jersye Promoter</h1>
                        <a href="#contact" type="button" class="cta">Contact Us</a>
                    </div>
                </div>
            </div>
            <h2>Our <span>Jerseys</span></h2>
            <p>"NuR Jersey Promotion: Elevate your game with stylish, high-quality jerseys designed for passionate fans!"</p>
            
            
            <div className="jersey-types">

                <div className="jersey-item">
                    <div className="n">
                <img src="./images/image.jfif" alt="" />
                </div>
                <div className="j">
                    <h3>Home Jersey</h3>
                    <p>Our home jersey features a classic design with vibrant colors.</p>
                    </div>
                </div>

                <div className="jersey-item">
                <div className="n">
                    <img src="./images/images (2).jfif" alt="" /> 
                    </div>
                    <div className="j">
                    <h3>Away Jersey</h3>
                    <p>The away jersey offers a sleek look for away games.</p>
                    </div>
                </div>

                <div className="jersey-item">
                <div className="n">
                    <img src="./images/images (1).jfif" alt="" /> 
                    </div>  
                    <div className="j">        
                    <h3>Third Jersey</h3>
                    <p>Our third jersey is designed for versatility and style.</p>
                    </div>   

                </div>
            </div>
        </section>
    );
};

export default Jersey;