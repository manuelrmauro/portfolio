import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import './Header.css';
import { changeLang, changeMode } from '../redux/actions';

function Header({ language, mode, changeLang, changeMode }) {
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
			<div className="navModes">
				<button
					onClick={(e) => handleChangeMode(e)}
					className={`btn navBtn navBtn${mode} navModesBtn`}
				>
					{mode === 'LightMode' ? 'L' : 'D'}
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
