import React from 'react'
import { connect } from 'react-redux'
import ContactForm from './ContactForm'

function Contact ({language, mode}) {
  return (
    <div className={`container container${mode} section sectionContact`}>
      {language === 'EN' && <h2>Contact</h2>} 
      {language === 'ES' && <h2>Contacto</h2>} 
      <ContactForm/>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    language : state.language,
    mode: state.mode
  }
}

export default connect(mapStateToProps, null)(Contact)
