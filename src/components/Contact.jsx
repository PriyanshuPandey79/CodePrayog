import React from 'react'
import ContactForm from './ContactForm'
import contact from './../assets/contact.png'
import ContactMail from '../buttons/ContactMail';

function Contact() {

  const sendMailToGmail = () => {
    const subject = encodeURIComponent('Subject of the email');
    const body = encodeURIComponent('Message body of the email');
    window.open(`mailto:codeprayog.academy@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };
  return (
    <div className='flex flex-col md:flex-row my-4 md:my-20 pt-20   text-white'>
        <div className='w-full md:w-[50%]  md:py-12'>
            <h1 className='font-bold text-gradient2 text-4xl md:text-6xl text-center'  id='contact'>Inquire today for personalized support</h1>
            
            <img src={contact} className='h-72 mt-8 mx-auto rounded-2xl'/>
            <div className='text-center mt-4'>
            <button
              onClick={sendMailToGmail}>
              
              <ContactMail />
            </button>
            </div>
            <p className='text-center font-semibold text-gray-900'><br/>
            We invite you to connect with us for any inquiries or feedback.<br/> Our team is dedicated to supporting students on their coding journey and is here to assist you every step of the way.</p>
        </div>
        <div className='w-full md:w-[50%] pt-24 px-12'>
               <ContactForm/>
        </div>
    </div>
  )
}

export default Contact
