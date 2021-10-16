import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Footer.css'



const Footer = () => {
    return (
        <div>
            <footer className="footer">
            <div className="social">
                    <SocialMedia></SocialMedia>
               </div>
                <div className="footer-slogan">
                    <p> &copy; Coding-Camp 2021</p>
                    <p>Learning that gets you skills for both your present and your future.</p>
                    <p>Get started with us.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;