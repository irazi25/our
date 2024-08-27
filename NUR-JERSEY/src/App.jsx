import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Jersey from './components/Jersey';

const App = () => {
    return (
        <div>
            <Header />
            <Jersey />
            <About />
            <Services />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default App;