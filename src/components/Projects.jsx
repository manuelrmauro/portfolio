import React from 'react'
import { connect } from 'react-redux'

function Projects ({language, mode}) {
  return (
    <div className={`container container${mode} section sectionProjects`}>
      {language === 'EN' && <h2>Projects</h2>} 
      {language === 'ES' && <h2>Proyectos</h2>} 
    </div>
  )
}

function mapStateToProps (state) {
  return {
    language : state.language,
    mode: state.mode
  }
}

export default connect(mapStateToProps, null)(Projects)
