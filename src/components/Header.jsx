/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { changeLang, changeMode } from '../redux/actions';
import { BsLightbulbOff, BsLightbulb } from 'react-icons/bs';

const scrollToSection = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Header({ language, mode, changeLang, changeMode }) {
	const [ocultBtn, setOcultBtn] = useState(' ocultBtn');

	useEffect(() => {
		document.addEventListener('scroll', () => {
			if (window.scrollY > 0) setOcultBtn('');
			else setOcultBtn(' ocultBtn');
		});
	}, [window.scrollY]);

	useEffect(() => {
		if (language === 'EN') {
			document.title = 'Manuel Mauro | Developer';
		} else {
			document.title = 'Manuel Mauro | Programador';
		}
	}, [language]);

	function handleChangeLang(e) {
		e.preventDefault();
		changeLang();
	}
	function handleChangeMode(e) {
		e.preventDefault();
		changeMode();
		window.scroll(0, window.scrollY + 1);
		window.scroll(0, window.scrollY - 1);
	}
	return (
		<div className={`container container${mode} sectionHeader`}>
			
			<div className='background'></div>
			<div className='background bg2'></div>
			<div className='background bg3'></div>
			<div className='background bg4'></div>
			<div className='background bg5'></div>
			<div className='background bg6'></div>
			<div className='background bg7'></div>
			<div className='background bg8'></div>
			<div className='background bg9'></div>
			<div className='background bg12'></div>
			<div className='background bg13'></div>
			<div className='background bg14'></div>
			<div className='background bg15'></div>
			<div className='background bg16'></div>
			<div className='background bg17'></div>
			<div className='background bg18'></div>
			<div className='background bg19'></div>
			<div className="navModes">
				<button
					onClick={() => scrollToSection()}
					className={`btn navBtn navModesBtn navBtn${mode} ${ocultBtn} topBtn`}
				>
					{language === 'EN' && 'TOP'}
					{language === 'ES' && 'ARRIBA'}
				</button>

				<button
					onClick={(e) => handleChangeMode(e)}
					className={`btn navBtn${mode} navModesBtn`}
				>
					{mode === 'LightMode' ? <BsLightbulbOff /> : <BsLightbulb />}
				</button>
				<button
					onClick={(e) => handleChangeLang(e)}
					className={`btn navBtn${mode} navModesBtn`}
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
