import React from 'react'
import './ContactBox.css';
import { BsFillTelephoneFill,BsEnvelope,BsWhatsapp,BsGeoAltFill  } from "react-icons/bs";


export const ContactBox = () => {
  return (
    <div className='contact_box'>
        <div className="contact_left">
            <div className="contact_item">
                <BsFillTelephoneFill />
                <div>
                    <h3>Phone Number</h3>
                    <p>+880 1770850305</p>
                </div>
            </div>
            <div className="contact_item">
                <BsEnvelope />

                <div>
                    <h3>E-mail</h3>
                    <p>laizuakram98@gmail.com</p>
                </div>
            </div>
            <div className="contact_item">
                <BsWhatsapp  />
                <div>
                    <h3>WhatsApp</h3>
                    <p>+880 1770850305</p>
                </div>
            </div>
            <div className="contact_item">
                <BsFillTelephoneFill />
                <div>
                    <h3>Fax</h3>
                    <p>+880 1770850305</p>
                </div>
            </div>

            <div className="contact_item">
                <BsGeoAltFill  />
                <div>
                    <h3>Location</h3>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
        <div className="contact_right">
            <h1>Message</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequatur mollitia explicabo optio possimus.</p>

            <div className="input_box">
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Your Email'/>
                <br />
                <input type="number" placeholder='Your Phone'/>
                <input type="text" placeholder='Subject'/>
            </div>
                <textarea cols="40" rows="8" placeholder='Message'></textarea>
                <input className='submit_btn' type="button" value="Submit" />
        </div>
    </div>
  )
}
