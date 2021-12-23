import React from 'react'
import { connect } from 'react-redux'

function About ({language}) {
  return (
    <div className='container section sectionAbout'>
      {language === 'EN' && 'ABOUT'} 
      {language === 'ES' && 'SOBRE MI'} 
    </div>
  )
}

function mapStateToProps (state) {
  return {
    language : state.language
  }
}

export default connect(mapStateToProps, null)(About)
