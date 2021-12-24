import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import './Contact.css';
import info from './data/info.json'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

function Contact({ language, mode }) {
	return (
		<div className={`container container${mode} section sectionContact`}>
			{language === 'EN' && <h2>Contact</h2>}
			{language === 'ES' && <h2>Contacto</h2>}
			<div className="contactContainer">
				<ContactForm />
        <p><BsGithub/><a href={info.github} target="blank">/manuelrmauro</a></p>
        <p><BsLinkedin/><a href={info.linkedin} target="blank">/manuelmaurodev</a></p>
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

export default connect(mapStateToProps, null)(Contact);
