import React from 'react'
import { connect } from 'react-redux'

export const About = (props) => {
  return (
    <div className='container section sectionAbout'>
      ABOUT
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
