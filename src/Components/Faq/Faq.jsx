import React from 'react'
import './Faq.css';
import faqImage from '../../assets/images/faq.jpg'

import 'smart-webcomponents-react/source/styles/smart.default.css';
import ReactDOM from 'react-dom/client';
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';


export const Faq = () => {
    
    
  return (
    <div className='faq'>
        <h1>Popular Question?</h1>

        <div className="faq_container">
            <Accordion>
				<AccordionItem label="How to Buy a Product?">First Item Content.</AccordionItem>
				<AccordionItem label="Second Item">Second Item Content.</AccordionItem>
				<AccordionItem label="Third Item">Third Item Content.</AccordionItem>
				<AccordionItem label="Fourth Item">Fourth Item Content.</AccordionItem>
			</Accordion>

            <img src={faqImage} alt="" />
        </div>
    </div>
  )
}
