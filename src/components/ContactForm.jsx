import React,{useRef} from 'react'
import { connect } from 'react-redux'
import emailjs from 'emailjs-com';

function ContactForm ({language}) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k6jcsgp', 'template_iazsyna', form.current, 'user_FzRaXIfWxWZbawjuvkySU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      if (language === 'EN') {
        alert("Message sent");
      } else {
        alert("Mensaje enviado");
      }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>{language === 'EN'?'Name':'Nombre'}</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>{language === 'EN'?'Message':'Mensaje'}</label>
      <textarea name="message" />
      <input type="submit" value={language === 'EN'?'Send':'Enviar'} />
    </form>
  );
}

function mapStateToProps (state) {
  return {
    language : state.language
  }
}


export default connect(mapStateToProps, null)(ContactForm)