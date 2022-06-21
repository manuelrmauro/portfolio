/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import { useEffect } from 'react';

function ContactForm({ language, mode }) {
	const form = useRef();
	const [input, setInput] = useState({
		user_name: '',
		user_email: '',
		message: ''
	});
	const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true)

	const handleInputChange = (e) => {
		e.preventDefault();
    setInput({...input, [e.target.name]: e.target.value})
	};

  useEffect(() => {
    let count = []
    Object.keys(input).forEach(key => {
      if (input[key].length === 0) count.push('input'+key)
    })
    Object.keys(errors).forEach(key => {
      if (Object.keys(errors[key]).length !== 0) count.push('error'+key)
    })
    if (count.length === 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [input, errors])

  useEffect(()=> {
    let user_name = {}
    if (!input.user_name) {
      user_name = {EN: "Enter a name", ES:"Ingrese un nombre"}
    }
    setErrors({...errors, user_name})
  },[input.user_name])

  useEffect(()=> {
    let user_email = {}
    if (!input.user_email) {
      user_email = {EN: "Enter an email", ES:"Ingrese un email"}
    } else if (!input.user_email.includes('@') || !input.user_email.split('@').at(-1).includes('.') || !input.user_email.split('.').at(-1)) {
      user_email = {EN: 'Enter a valid email', ES: 'Ingrese un email valido'}
    } 
    setErrors({...errors, user_email})
  },[input.user_email])

	const [handleInit, setHandleInit] = useState(true)

  useEffect(() => {
    let message = {}
    if (!handleInit && !input.message) {
			
      message = {EN: 'Enter a message', ES: 'Ingrese un mensaje'}
    }
		setHandleInit(false)
    setErrors({...errors, message})
  },[input.message])

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_k6jcsgp',
				'template_iazsyna',
				form.current,
				'user_FzRaXIfWxWZbawjuvkySU'
			)
			.then(
				(result) => {
					if (language === 'EN') {
            alert('Message sent');
          } else {
            alert('Mensaje enviado');
          }
          e.target.reset();
				},
				(error) => {
					if (language === 'EN') {
            alert('An error has ocurred. Try later.');
          } else {
            alert('Ocurrió un error. Intente nuevamente.');
          }
				}
			);
		
	
	};

	return (
		<form className="contactForm" ref={form} onSubmit={sendEmail}>
			<label>{language === 'EN' ? 'Name' : 'Nombre'}</label>
			<input
				type="text"
				name="user_name"
				placeholder={
					language === 'EN' ? 'Enter your name...' : 'Ingresa tu nombre... '
				}
				value={input.user_name}
				onChange={handleInputChange}
			/>
      {errors.user_name && <div className={`error ${mode}`}>{language === 'EN' ? errors.user_name.EN : errors.user_name.ES}</div>}
			<label>Email</label>
			<input
				type="email"
				name="user_email"
				placeholder={
          language === 'EN' ? 'Enter your email...' : 'Ingresa tu email... '
				}
				value={input.user_email}
				onChange={handleInputChange}
        />
        {errors.user_email && <div className={`error ${mode}`}>{language === 'EN' ? errors.user_email.EN : errors.user_email.ES}</div>}
			<label>{language === 'EN' ? 'Message' : 'Mensaje'}</label>
			<textarea
				name="message"
				placeholder={
          language === 'EN' ? 'Enter your message...' : 'Ingresa tu mensaje... '
				}
				value={input.message}
				onChange={handleInputChange}
        />
        {errors.message && <div className={`error ${mode}`}>{language === 'EN' ? errors.message.EN : errors.message.ES}</div>}
			<input
				className={`contactBtn ${mode}`}
				type="submit"
				value={language === 'EN' ? 'Send' : 'Enviar'}
        disabled={disabled}
			/>
		</form>
	);
}

function mapStateToProps(state) {
	return {
		language: state.language,
		mode: state.mode,
	};
}

export default connect(mapStateToProps, null)(ContactForm);
