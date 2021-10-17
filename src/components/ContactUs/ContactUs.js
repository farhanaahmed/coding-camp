import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <p className="course-header">Connect with Us</p>
            <div className="contact">
                <div className="post">
                    <FontAwesomeIcon icon = {faBuilding} size="4x" color="828b8a"  />
                    <h3>Corporate Office Address</h3>
                    <p>ISC Corporation <br />
                    8680 Concord Center Dr,<br/>
                    Englewood, CO 80112,<br/>
                    United States</p>
                </div>
                <div className="post">
                    <FontAwesomeIcon icon= {faMapMarker} size="5x"  color="828b8a"/>
                    <h3>Location on Map</h3>
                    <div className="map">
                    <iframe title = "map-address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.008540863597!2d-104.83424828462992!3d39.55941497947396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c8f770db39cd9%3A0x40b66f2ddf9f90b2!2s8668%20Concord%20Center%20Dr%2C%20Englewood%2C%20CO%2080112%2C%20USA!5e0!3m2!1sen!2sbd!4v1592757825842!5m2!1sen!2sbd" width="80" height="80" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div> 
                <div className="post">
                    <FontAwesomeIcon icon = {faPhone} size="5x"  color="828b8a"/>
                    <h3>Telephone Number</h3>
                    <p>89652225454<br/>
                    88955642475<br/>
                    88955642475<br/>
                    95566680112<br/></p>
                </div>
                <div className="post">
                    <FontAwesomeIcon icon = {faComment} size="5x"  color="828b8a"/>
                    <h3>E-mail Address</h3>
				    <p>simple@example.com<br/>
				    very.common@example.com<br/>
				    distyle.@example.com</p>
                </div>
                <div className="post">
                    <FontAwesomeIcon icon ={faMobile} size="5x"/>
                    <h3>Cell Number</h3>
                    <p>0118652225454<br/>
                    01455642475<br/>
                    01266680112<br/></p>
                </div>
                <div className="post">
                    <FontAwesomeIcon icon ={faConnectdevelop} size="5x"  color="828b8a"/>
                    <h3>Website Links</h3>
                    <p>www.simple@example.com<br/>
                    www.very.common@example.com<br/>
                    www.distyle.@example.com</p>

                </div>
            </div>


        </div>
    );
};

export default ContactUs;