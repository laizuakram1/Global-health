import React from 'react'
import './About.css';
import { PageHeader } from '../../Components/PageHeader/PageHeader'
import faithImage from '../../assets/images/faith.webp';
import manager from '../../assets/images/manager.jpeg'
import { BiCheckCircle,BiPhoneCall  } from "react-icons/bi";
import { CoreFeatures } from '../../Components/CoreFeatures/CoreFeatures';
import { Faq } from '../../Components/Faq/Faq';





export const About = () => {
  return (
    <div className='about'>
        <PageHeader />

        <div className="faithful_partner">
            <div className="faith_image">
                <img src={faithImage} alt="" />
            </div>
            <div className="faith_text">
                <h1>We Are Your Faith Partner For Supply Medical Equipments.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio quo officia, nesciunt voluptatum sit?</p>

                <br />

                <p><BiCheckCircle /> Better security for patient privacy and information.</p>
                <p><BiCheckCircle /> More products at lower prices.</p>
                <p><BiCheckCircle /> connect customers with the power of eCommerce at all.</p>
                <hr />
                <div className="manager_contact">
                    <div className="manager_left">
                        <img src={manager} alt="manager photo" />
                        <div className="manager_info">
                            <h2>Linda mack</h2>
                            <p>General Manager</p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="manager_right">
                        
                        <BiPhoneCall />

                        <div className="manager_contact_info">
                            <p>Get Support</p>
                            <h4>+880 1770850305</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <CoreFeatures />
        <Faq />
    </div>
  )
}
