// This page is for contact information
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-content">
                <p>If you have any questions or inquiries, feel free to get in touch with us. We would love to hear from you!</p>
                <ul>{/* Add Actual Contact Information */}
                    <li>Email: support@activelarningroi.com</li>
                    <li>Phone: +1 (123) 456-7890</li>
                    <li>Address: 1234 Main Street, City, State, Country</li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
