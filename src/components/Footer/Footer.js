import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-left">
                <span className="footer-left-inner">Get in Touch</span>
            </div>
            <div className="footer-center">
                <div class="footer-center-about-us">About us</div>
                <div class="footer-center-services">Services</div>
                <div class="footer-center-careers">Careers</div>
                <div class="footer-center-contract">Contract</div>
            </div>
            <div className="footer-right">
                <span className="footer-right-inner">AVALITH</span>
                <span className="footer-right-dot">.</span>
            </div>
        </div>
    )
}

export default Footer
