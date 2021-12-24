import React from 'react';
import { connect } from 'react-redux';
import Project from './Project';
import projects from './data/projects.json';
import './Projects.css';

function Projects({ language, mode }) {
	return (
		<div className={`container container${mode} section sectionProjects`}>
			<h2>
				{language === 'EN' && 'Projects'}
				{language === 'ES' && 'Proyectos'}
			</h2>
			<div className="projectsContainer">
				{projects.map((project) => (
					<Project
						key={project.EN.name}
						name={language === 'EN' ? project.EN.name : project.ES.name}
						summary={
							language === 'EN' ? project.EN.summary : project.ES.summary
						}
						video={project.EN.video}
						screenshots={project.EN.screenshots}
						github={project.EN.github}
						link={project.EN.link}
					/>
				))}
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

export default connect(mapStateToProps, null)(Projects);
