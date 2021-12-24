import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { changeLang, changeMode } from '../redux/actions';
import {BsLightbulbOff,BsLightbulb} from 'react-icons/bs'

const scrollToSection = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Header({ language, mode, changeLang, changeMode }) {
	const [ocultBtn, setOcultBtn] = useState(' ocultBtn')

	useEffect(() => {
		document.addEventListener('scroll',() => {
			if (window.scrollY > 0) setOcultBtn('')
			else setOcultBtn(' ocultBtn')
		})
	},[window.scrollY])


	function handleChangeLang(e) {
		e.preventDefault();
		changeLang();
	}
	function handleChangeMode(e) {
		e.preventDefault();
		changeMode();
		window.scroll(0, window.scrollY + 2);
		window.scroll(0, window.scrollY - 1);
	}
	return (
		<div className={`container container${mode} sectionHeader`}>
			<div className="navModes">
				<button
				onClick={() => scrollToSection()}
				className={`btn navBtn navModesBtn navBtn${mode} ${ocultBtn} topBtn`}
			>
				{language === 'EN' && 'GO TOP'}
				{language === 'ES' && 'IR ARRIBA'}
			</button>
			
				<button
					onClick={(e) => handleChangeMode(e)}
					className={`btn navBtn navBtn${mode} navModesBtn`}
				>
					{mode === 'LightMode' ? <BsLightbulbOff/> : <BsLightbulb/>}
				</button>
				<button
					onClick={(e) => handleChangeLang(e)}
					className={`btn navBtn navBtn${mode} navModesBtn`}
				>
					{language === 'EN' ? 'ES' : 'EN'}
				</button>
			</div>
			{language === 'EN' && (
				<div className="headerContainer">
					<h1 className="headerTitle">Manuel Mauro</h1>
					<h3 className="headerSubtitle">Developer</h3>
				</div>
			)}
			{language === 'ES' && (
				<div className="headerContainer">
					<h1 className="headerTitle">Manuel Mauro</h1>
					<h3 className="headerSubtitle">Programador</h3>
				</div>
			)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		language: state.language,
		mode: state.mode,
	};
}

export default connect(mapStateToProps, { changeLang, changeMode })(Header);
