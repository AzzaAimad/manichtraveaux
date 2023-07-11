import React , { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './ContactUsStyles.css';
import styled from "styled-components";


function ContactUs() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jfskjmt",
        "template_ulqd3mi",
        form.current,
        "GBSMugNtg8ztAiDyU"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
  <form ref={form} onSubmit={sendEmail}>
     <div>hello from contact</div>
      <label>Name</label>
      <input type="text" name="name" id='' placeholder='Enter your name'/>
      <label>Email</label>
      <input type="email" name="email" id='' placeholder='Enter your Email'/>
      <label>Message</label>
      <textarea name='message' placeholder='Enter your Message'/>
      <input type="submit" value='Send' />
    </form>
    </StyledContactForm>
  )
  
    

}
 
export default ContactUs;


// Styles
const StyledContactForm = styled.div`
  width: 50%;
  form {
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin-left:80px;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid gold;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid gold;
      &:focus {
        border: 2px solid gold;
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: gold;
      color: black;
      border: none;
    }
  }
`;