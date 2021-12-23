import React from 'react'
import { connect } from 'react-redux'

function Skills ({language}) {
  return (
    <div className='container section sectionSkills'>
      {language === 'EN' && 'SKILLS'} 
      {language === 'ES' && 'HABILIDADES'} 
    </div>
  )
}

function mapStateToProps (state) {
  return {
    language : state.language
  }
}

export default connect(mapStateToProps, null)(Skills)
