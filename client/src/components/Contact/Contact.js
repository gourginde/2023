import React from 'react';
import './Contact.css';
import linkedInLogo from '../../assets/images/linkedin-logo.png';
import ammarImage from '../../assets/images/Ammar.jpeg';
import noopurImage from '../../assets/images/Noopur.jpeg';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>

            <div className="contact-content">
                <p>If you have any questions or inquiries, feel free to get in touch with us. We would love to hear from you!</p>
                
                <div className="linkedin-profile">
                    <h3>Semi-Supervised (Active Learning) - Connect with Ammar on LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/ammar-elzeftawy-75a34a242/" target="_blank" rel="noopener noreferrer">
                        <img src={ammarImage} alt="Ammar" className="profile-image" />
                        <img src={linkedInLogo} alt="LinkedIn Logo" className="linkedin-logo" />
                        Ammar Elzeftawy
                    </a>
                    <p>Email: <a href="mailto:amzeftawy@gmail.com">amzeftawy@gmail.com</a></p>
                </div>
                
                <div className="linkedin-profile">
                    <h3>Supervised Training - Connect with Noopur on LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/noopur-zambare/" target="_blank" rel="noopener noreferrer">
                        <img src={noopurImage} alt="Noopur" className="profile-image" />
                        <img src={linkedInLogo} alt="LinkedIn Logo" className="linkedin-logo" />
                        Noopur Zambare
                    </a>
                    <p>Email: <a href="mailto:zambarenoopur.zn@gmail.com">zambarenoopur.zn@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
