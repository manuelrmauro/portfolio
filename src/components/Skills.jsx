import React from 'react'
import { connect } from 'react-redux'

function Skills ({language, mode}) {
  return (
    <div className={`container container${mode} section sectionSkills`}>
      {language === 'EN' && <h2>Skills</h2>} 
      {language === 'ES' && <h2>Habilidades</h2>} 
    </div>
  )
}

function mapStateToProps (state) {
  return {
    language : state.language,
    mode: state.mode
  }
}

export default connect(mapStateToProps, null)(Skills)
