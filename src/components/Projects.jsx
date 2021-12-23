import React from 'react'
import { connect } from 'react-redux'

function Projects ({language}) {
  return (
    <div className='container section sectionProjects'>
      {language === 'EN' && 'PROJECTS'} 
      {language === 'ES' && 'PROYECTOS'} 
    </div>
  )
}

function mapStateToProps (state) {
  return {
    language : state.language
  }
}

export default connect(mapStateToProps, null)(Projects)
