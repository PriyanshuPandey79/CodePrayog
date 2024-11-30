import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Send from './../buttons/Send.jsx';

const ContactForm = ({ isDarkMode }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const formEle = e.target;
    const formData = new FormData(formEle);
    
    // Get field values
    const name = formData.get("Name");
    const email = formData.get("Email");
    const phoneNo = formData.get("PhoneNo");

    // Validation
    if (!name || !email || !phoneNo) {
      toast.error("Name, Email, and Phone No. are required.");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Phone number validation (simple numeric check)
    const phonePattern = /^\d{10}$/; // Assuming phone number should be 10 digits
    if (!phonePattern.test(phoneNo)) {
      toast.error("Please enter a valid phone number (10 digits).");
      return;
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbxwUGM9Tf6_NL3lVkHqmE45yAq34rgcKRTpG12A8H0aMEp5dV29MniDegTEShKVaaPthg/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Details sent ✅");
        formEle.reset(); 
      })
      .catch((error) => {
        console.log(error);
      });
      formEle.reset(); 
      toast.success("Details sent ✅");
  }

  return (
    <div className={`max-w-2xl mx-auto p-4 ${isDarkMode ? 'bg-gray-800' : ''} rounded-lg shadow-md`}>
      <ToastContainer />
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className='flex flex-col md:flex-row md:space-x-4'>
          <div className='w-full md:w-1/2'>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder='Name*'
              required
              className={`mt-1 block w-full p-3 border-b rounded-md shadow-sm focus:ring-2 focus:ring-red-500 bg-gray-900 border-gray-700`}
            />
          </div>
          <div className='w-full md:w-1/2'>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder='Email*'
              required
              className={`mt-1 block w-full p-3 border-b rounded-md shadow-sm focus:ring-2 focus:ring-red-500 bg-gray-900 border-gray-700`}
            />
          </div>
        </div>

        <input
          type="tel"
          id="PhoneNo"
          name="PhoneNo"
          placeholder='Phone No.*'
          required
          className={`mt-1 block w-full p-3 border-b rounded-md shadow-sm focus:ring-2 focus:ring-red-500 bg-gray-900 border-gray-700`}
        />

        <input
          type="text"
          id="AddressLine1"
          name="AddressLine1"
          placeholder="Address Line 1"
          className={`mt-1 block w-full p-3 border-b rounded-md shadow-sm focus:ring-2 focus:ring-red-500 bg-gray-900 border-gray-700`}
        />

        <input
          type="text"
          id="AddressLine2"
          name="AddressLine2"
          placeholder='Address Line 2'
          className={`mt-1 block w-full p-3 border-b rounded-md shadow-sm focus:ring-2 focus:ring-red-500 bg-gray-900 border-gray-700`}
        />

        <div className='flex flex-col md:flex-row md:space-x-4'>
          <div className='w-full md:w-1/2'>
            <input
              type="text"
              id="City"
              name="City"
              placeholder='City'
              className={`mt-1 block w-full p-3 border-b rounded-md shadow-sm focus:ring-2 focus:ring-red-500 bg-gray-900 border-gray-700`}
            />
          </div>
          <div className='w-full md:w-1/2'>
            <input
              type="text"
              id="State"
              name="State"
              placeholder='State'
              className={`mt-1 block w-full p-3 border-b rounded-md shadow-sm focus:ring-2 focus:ring-red-500 bg-gray-900 border-gray-700`}
            />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:space-x-4'>
          <div className='w-full md:w-1/2'>
            <input
              type="text"
              id="ZipCode"
              name="ZipCode"
              placeholder='Zip Code'
              className={`mt-1 block w-full p-3 border-b rounded-md shadow-sm focus:ring-2 focus:ring-red-500 bg-gray-900 border-gray-700`}
            />
          </div>
          <div className='w-full md:w-1/2'>
            <input
              type="text"
              id="Country"
              name="Country"
              placeholder='Country'
              className={`mt-1 block w-full p-3 border-b rounded-md shadow-sm focus:ring-2 focus:ring-red-500 bg-gray-900 border-gray-700`}
            />
          </div>
        </div>

        <textarea
          id="Message"
          name="Message"
          rows="3"
          placeholder='Message'
          className={`mt-1 block w-full p-3 border-b rounded-md shadow-sm focus:ring-2 focus:ring-red-500 bg-gray-900 border-gray-700`}
        ></textarea>

        <div className='flex justify-center'>
          <Send type="submit" isDarkMode={isDarkMode} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
