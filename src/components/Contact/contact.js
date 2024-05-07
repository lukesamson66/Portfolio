import React, { useRef } from 'react'
import './contact.css'
import Sandborn from '../../assets/Sandborn_Logo_Retina.png'
import LMG from '../../assets/LMG Full Logo (.png).png'
import LinkedIn from '../../assets/icons8-linkedin-50.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_kaezyey', 'template_cwmtn0o', form.current, {
            publicKey: '4RcfYJ_NcLq32fmrR',
            })
            .then(
                () => {
                console.log('SUCCESS!');
                e.target.reset();
                alert('Email Sent!');
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
        };
    return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Sandborn} alt="Sandborn Roofs" className="clientImg" />
                    <img src={LMG} alt="Leading Manufacturing Group" className="clientImg" />
                </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={LinkedIn} alt="LinkedIn" className="link" />
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact