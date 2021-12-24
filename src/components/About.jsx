import React from 'react';
import { connect } from 'react-redux';
import './About.css';
import info from './data/info.json';
import {BsFileEarmarkText} from 'react-icons/bs'

function About({ language, mode }) {
	return (
		<div className={`container container${mode} section sectionAbout`}>
			{language === 'EN' && <h2>About</h2>}
			{language === 'ES' && <h2>Sobre mi</h2>}
			<div className="aboutContainer">
				<p>
					{language === 'EN' && info.about.EN}
					{language === 'ES' && info.about.ES}
				</p>
				<p className='curriculum'><BsFileEarmarkText/><a href={info.CV} target="blank">Curriculum Vitae</a></p>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		language: state.language,
		mode: state.mode,
	};
}

export default connect(mapStateToProps, null)(About);
