import React from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

function Header ({language}) {
  return (
    <div className='container sectionHeader'>
      {language === 'EN' && 'HEADER'} 
      {language === 'ES' && 'TITULO'} 
    </div>
  )
}

function mapStateToProps (state) {
  return {
    language : state.language
  }
}

export default connect(mapStateToProps, null)(Header)
