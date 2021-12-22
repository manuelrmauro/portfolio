import './App.css';
import {Header} from './components/Header'
import {Nav} from './components/Nav'
import {About} from './components/About'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Nav/>
      <div className='space'/>
      <About/>
      <div className='space'/>
      <Skills/>
      <div className='space'/>
      <Projects/>
      <div className='space'/>
      <Contact/>
    </div>
  );
}

export default App