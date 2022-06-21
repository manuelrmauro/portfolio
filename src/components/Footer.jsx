import React from 'react';
import { connect } from 'react-redux';
/* const scrollToSection = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}; */

function Footer({ language }) {
	return (
		<div className='footer'>
				{language === 'EN' && 'Made by Manuel Mauro©'}
				{language === 'ES' && 'Hecho por Manuel Mauro© '} 

		</div>
	);
}

function mapStateToProps(state) {
	return {
		language: state.language,
	};
}

export default connect(mapStateToProps, null)(Footer);
