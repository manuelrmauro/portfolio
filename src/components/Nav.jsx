import React, {useRef} from 'react'
import { connect } from 'react-redux'
import { scroller } from 'react-scroll'

const scrollToSection = (id) => {
  scroller.scrollTo(id, {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
    offset:-50
  });
};

const ref = useRef()

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
  );
}


export const Nav = (props) => {

  return (
    <div className='nav'>
      <button onClick={() => scrollToSection('sectionAbout')}>ABOUT</button>
      <button onClick={() => scrollToSection('sectionSkills')}>SKILLS</button>
      <button onClick={() => scrollToSection('sectionProjects')}>PROJECTS</button>
      <button onClick={() => scrollToSection('sectionContact')}>CONTACT</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
