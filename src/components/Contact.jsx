import React from 'react'
import { connect } from 'react-redux'

function Contact ({language}) {
  return (
    <div className='container section sectionContact'>
      {language === 'EN' && 'CONTACT'} 
      {language === 'ES' && 'CONTACTO'} 
    </div>
  )
}

function mapStateToProps (state) {
  return {
    language : state.language
  }
}

export default connect(mapStateToProps, null)(Contact)
