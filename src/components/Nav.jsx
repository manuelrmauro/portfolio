import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { scroller } from 'react-scroll';
import { changeLang } from '../redux/actions';

const scrollToSection = (id) => {
	scroller.scrollTo(id, {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
		offset: -50,
	});
};

function Nav({ language, changeLang }) {
	const aboutBtn = useRef();
	const skillsBtn = useRef();
	const projectsBtn = useRef();
	const contactBtn = useRef();
	const nav = useRef();

	function handleChangeLang(e) {
		e.preventDefault();
		changeLang();
	}

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
		<div className="nav" ref={nav}>
			<button onClick={() => scrollToSection('sectionAbout')} ref={aboutBtn}>
				{language === 'EN' ? 'ABOUT' : 'SOBRE MI'}
			</button>
			<button onClick={() => scrollToSection('sectionSkills')} ref={skillsBtn}>
				{language === 'EN' ? 'SKILLS' : 'HABILIDADES'}
			</button>
			<button
				onClick={() => scrollToSection('sectionProjects')}
				ref={projectsBtn}
			>
				{language === 'EN' ? 'PROJECTS' : 'PROYECTOS'}
			</button>
			<button
				onClick={() => scrollToSection('sectionContact')}
				ref={contactBtn}
			>
				{language === 'EN' ? 'CONTACT' : 'CONTACTO'}
			</button>
			<button onClick={(e) => handleChangeLang(e)}>
				{language === 'EN' ? 'ES' : 'EN'}
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		language: state.language,
	};
}

export default connect(mapStateToProps, { changeLang })(Nav);
