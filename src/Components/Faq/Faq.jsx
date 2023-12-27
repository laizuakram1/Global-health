import React from 'react'
import './Faq.css';
import faqImage from '../../assets/images/faq.jpg'
import { BiSolidChevronDown } from "react-icons/bi";


import 'smart-webcomponents-react/source/styles/smart.default.css';
import ReactDOM from 'react-dom/client';
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';


export const Faq = () => {
    
    
  return (
    <div className='faq'>
        <h1>Popular Question?</h1>

        <div className="faq_container">
            <div className="single_faqs_container">
                <div className="single_faq">
                 <label htmlFor="first">How to buy products?  <span><BiSolidChevronDown /></span></label>
                  <input type="radio" name='accordion' id='first' />

                <div className="accordion_content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta excepturi, labore porro aliquid quam amet consectetur earum explicabo recusandae?</p>
                </div>
              </div>

                <div className="single_faq">
                 <label htmlFor="second">How can I Refund from You?  <span><BiSolidChevronDown /></span></label>
                  <input type="radio" name='accordion' id='second' />

                <div className="accordion_content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta excepturi, labore porro aliquid quam amet consectetur earum explicabo recusandae?</p>
                </div>
              </div>

                <div className="single_faq">
                 <label htmlFor="third">Minimum Delivery Day?<span><BiSolidChevronDown /></span></label>
                  <input type="radio" name='accordion' id='third' />

                <div className="accordion_content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta excepturi, labore porro aliquid quam amet consectetur earum explicabo recusandae?</p>
                </div>
              </div>

                <div className="single_faq">
                 <label htmlFor="four">You have authorized Servicing Center?  <span><BiSolidChevronDown /></span></label>
                  <input type="radio" name='accordion' id='four' />

                <div className="accordion_content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dicta excepturi, labore porro aliquid quam amet consectetur earum explicabo recusandae?</p>
                </div>
              </div>

            </div>

            <img src={faqImage} alt="" />
        </div>
    </div>
  )
}
