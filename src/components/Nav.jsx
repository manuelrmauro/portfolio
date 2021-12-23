import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { scroller } from 'react-scroll';
import './Nav.css'

const scrollToSection = (id) => {
	scroller.scrollTo(id, {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
		offset: -29,
	});
};

function Nav({ mode, language}) {
	const aboutBtn = useRef();
	const skillsBtn = useRef();
	const projectsBtn = useRef();
	const contactBtn = useRef();
	const nav = useRef();



	useEffect(() => {
		document.addEventListener('scroll', function (e) {
			const positions = document.getElementsByClassName('section');
			const sections = [
				{ pos: positions[0].getBoundingClientRect().y, elem: aboutBtn },
				{ pos: positions[1].getBoundingClientRect().y, elem: skillsBtn },
				{ pos: positions[2].getBoundingClientRect().y, elem: projectsBtn },
				{ pos: positions[3].getBoundingClientRect().y, elem: contactBtn },
			];
			const windowSize = window.innerHeight;
			const headerBottom = document
				.getElementsByClassName('sectionHeader')[0]
				.getBoundingClientRect().bottom;
			sections.forEach(({ elem }) => {
				elem.current.className = elem.current.className.replace(
					' selected',
					''
				);
			});
			// TODO RESOLVER ACOMODAR NAV
			/* if (nav.current.getBoundingClientRect().y <= 0 && Math.floor(headerBottom) < windowSize/2) {
				nav.current.className = nav.current.className + ' sticky';
			} else {
				nav.current.className = nav.current.className.replaceAll(' sticky', '');
			} */
			for (let i = 0; i < positions.length; i++) {
				positions[i].className = positions[i].className.replace(' visible', '');
			}

			for (let i = 0; i < sections.length; i++) {
				if (sections[0].pos > windowSize / 2) break;
				if (i === sections.length - 1) {
					positions[i].className = positions[i].className + ' visible';
					sections[i].elem.current.className =
						sections[i].elem.current.className + ' selected';
					break;
				}
				if (
					(Math.floor(sections[i].pos) > 0 &&
						Math.floor(sections[i].pos) < windowSize / 2) ||
					Math.floor(sections[i + 1].pos) > windowSize / 2
				) {
					positions[i].className = positions[i].className + ' visible';
					sections[i].elem.current.className =
						sections[i].elem.current.className + ' selected';
					break;
				}
			}
		});
	}, []);

	return (
		<div className={`nav nav${mode}`} ref={nav}>
			<button onClick={() => scrollToSection('sectionAbout')} ref={aboutBtn} className={`btn navBtn navBtn${mode}`}>
				{language === 'EN' ? 'ABOUT' : 'SOBRE MI'}
			</button>
			<button onClick={() => scrollToSection('sectionSkills')} ref={skillsBtn} className={`btn navBtn navBtn${mode}`}>
				{language === 'EN' ? 'SKILLS' : 'HABILIDADES'}
			</button>
			<button
				onClick={() => scrollToSection('sectionProjects')}
				ref={projectsBtn} className={`btn navBtn navBtn${mode}`}
			>
				{language === 'EN' ? 'PROJECTS' : 'PROYECTOS'}
			</button>
			<button
				onClick={() => scrollToSection('sectionContact')}
				ref={contactBtn} className={`btn navBtn navBtn${mode}`}
			>
				{language === 'EN' ? 'CONTACT' : 'CONTACTO'}
			</button>
			
		</div>
	);
}

function mapStateToProps(state) {
	return {
		mode: state.mode,
		language: state.language,
	};
}

export default connect(mapStateToProps, null)(Nav);
