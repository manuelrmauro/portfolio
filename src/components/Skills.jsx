import React from 'react';
import { connect } from 'react-redux';
import skills from './data/skills.json';
import './Skills.css'

function Skills({ language, mode }) {
	return (
		<div className={`container container${mode} section sectionSkills`}>
			{language === 'EN' && (
				<div>
					<h2>Skills</h2>
					<h3>Technical Skills</h3>
					<div className='skillContainer'>
					{skills.technical.map((skill) => (
						<div key={skill} className={`skill ${mode}`}>
							{skill}
						</div>
					))}
					</div>
					<h3>Soft Skills</h3>
					<div className='skillContainer'>
					{skills.soft.EN.map((skill) => (
						<div key={skill} className={`skill ${mode}`}>
							{skill}
						</div>
					))}
					</div>
				</div>
			)}
			{language === 'ES' && (
				<div>
					<h2>Habilidades</h2>
					<h3>Habilidades Técnicas</h3>
					<div className='skillContainer'>

					{skills.technical.map((skill) => (
						<div key={skill} className={`skill ${mode}`}>
							{skill}
						</div>
					))}
					</div>
					<h3>Habilidades Blandas</h3>
					<div className='skillContainer'>
					{skills.soft.ES.map((skill) => (
						<div key={skill} className={`skill ${mode}`}>
							{skill}
						</div>
					))}
					</div>
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

export default connect(mapStateToProps, null)(Skills);
