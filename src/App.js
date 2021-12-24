import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { connect } from 'react-redux';
import Footer from './components/Footer';

function App({mode}) {
  return (
    <div className={`App ${mode}`}>
      <Header/>
      <Nav/>  
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    mode: state.mode
  }
}

export default connect(mapStateToProps, null)(App)