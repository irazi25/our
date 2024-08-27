import React, { useState } from 'react';
import './styles.css';

const ContactForm = () => {
    // const [formData, setFormData,txt, changeTxt] = useState({ name: '', email: '', message: '' });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
       

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to an API.
        console.log(formData);
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
     
    };


   


    return (
        <section id="contact" className="contact">
            <h2><span>Contact</span> Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="con">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>            
                <button type='submit' >Send Message</button> 
                

                {success && <p className="success">Message sent successfully!</p>}
                </div>
            </form>
        </section>
    );
};

export default ContactForm;