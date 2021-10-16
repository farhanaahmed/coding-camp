import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import './SocialMedia.css'

const SocialMedia = () => {
    return (
        <div>
            <div className="social-media">
                    <a className = "facebook" href = "https://www.facebook.com/">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a >
                    <a className = "github" href = "https://github.com/">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a >
                    <a className = "instagram" href = "https://www.instagram.com/">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a >
                    <a className = "twitter" href = "https://twitter.com/">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a >
                    <a className = "linked-in" href = "https://www.linkedin.com/">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                    </a >               
                </div>
        </div>
    );
};

export default SocialMedia;