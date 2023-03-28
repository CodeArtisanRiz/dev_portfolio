import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from "../utils/motion";

const queryParameters = new URLSearchParams(window.location.search)
  const query = queryParameters.get("query")
  // const name = queryParameters.get("name")
  if (query === "submitted"){
    window.alert('Thankyou. I will get back to you asap.');
  }
  

const Contact = () => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  const handleNameChange = name_event => {
    setName(name_event.target.value)
  };
  const handleEmailChange = email_event => {
    setEmail(email_event.target.value)
  };
  const handlePhoneChange = phone_event => {
    if(phone_event.target.value.length > 10){ 
      window.alert("Phone shouldn't exceed 10 characters")
      setPhone(phone_event.target.value = phone_event.target.value.slice(0,10))
    }    
  };
  const handleMessageChange = msg_event => {
    setMessage(msg_event.target.value)
  };
  
  const handleClick = event => {
    
    if (name.trim().length == 0){
      event.preventDefault();
      console.log('Name cannot be empty');
      alert('Name cannot be empty')
    }
    else if (email.trim().length == 0){
      event.preventDefault();
      console.log('Email cannot be empty');
      alert('Email cannot be empty')
    }
    else if (phone.trim().length == 0){
      event.preventDefault();
      console.log('Phone cannot be empty');
      alert('Phone cannot be empty')
    }
    else if (phone.trim().length !== 10){
      event.preventDefault();
      console.log('Invalid Phone');
      alert('Invalid Phone')
    }
    else if (message.trim().length == 0){
      event.preventDefault();
      console.log('Message cannot be empty');
      alert('Message cannot be empty')
    }
    else{
      document.getElementsByName(email).value=''
      setEmail(email_event.target.value='')
      setPhone(phone_event.target.value = '')
      setMessage(msg_event.target.value = '')
    }
  };
  
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form 
            action="https://formsubmit.co/techno3gamma@gmail.com"
            method="post"
            id="contactForm" 
            name="sentMessage"
            className="mt-12 flex flex-col gap-8">
              
          <label
              className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input 
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleNameChange}
                  placeholder="Whats's your name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
            </label>
            <label
              className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input 
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleEmailChange}
                  placeholder="Whats's your email?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
            </label>
            <label
              className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Phone</span>
                <input 
                  type="number"
                  name="phone"
                  id="phone"
                  pattern="[1-9]{1}[0-9]{9}"
                  onChange={handlePhoneChange}
                  placeholder="Whats's your phone?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
            </label>

            <label
              className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Message</span>
                <textarea
                  rows="7"
                  id="msg"
                  name="message"
                  onChange={handleMessageChange}
                  placeholder="Whats do you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  />
                  
            </label>
            <input 
              type="hidden"
              name="_cc"
              value="riz1.xtreme@gmail.com"
            />
            <input 
              type="hidden"
              name="_template"
              value="box"
            />
            <input 
              type="hidden"
              name="_next"
              value='https://techno3gamma.in/riz/?query=submitted'
              // value='http://localhost:5173/?query=submitted'
            />
            <input 
              type="hidden"
              name="_captcha"
              value="false"
            />
            
            <button
              type="submit"
              id="sendMessageButton"
              onClick={handleClick}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              >Send
            </button>
          </form>
      
      </motion.div>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  );
}
function checkEmpty()
{
    if (document.getElementById("phone").value==999999999){

        alert("Please enter valid phone number");
        return false; 
    
    } else{

        return true;
        
    }
        
}

export default SectionWrapper(Contact, "contact");