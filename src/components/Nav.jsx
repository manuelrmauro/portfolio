import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { scroller } from 'react-scroll';

const scrollToSection = (id) => {
	scroller.scrollTo(id, {
		duration: 800,
		delay: 0,
		smooth: 'easeInOutQuart',
		offset: -50,
	});
};

export const Nav = (props) => {
	const aboutBtn = useRef();
	const skillsBtn = useRef();
	const projectsBtn = useRef();
	const contactBtn = useRef();

	useEffect(() => {
		document.addEventListener('scroll', function (e) {
      const positions = document
				.getElementsByClassName('section')
			const sections = [
				{ pos: positions[0].getBoundingClientRect().y, elem: aboutBtn },
				{ pos: positions[1].getBoundingClientRect().y, elem: skillsBtn },
				{ pos: positions[2].getBoundingClientRect().y, elem: projectsBtn },
				{ pos: positions[3].getBoundingClientRect().y, elem: contactBtn },
			];
			const windowSize = window.innerHeight;
			sections.forEach(({ elem }) => {
				elem.current.className = elem.current.className.replace(
					' selected',
					''
				);
			});
			for (let i = 0; i < sections.length; i++) {
        if(sections[0].pos > windowSize / 2) break
        if (i === sections.length - 1) {
          sections[i].elem.current.className =
						sections[i].elem.current.className + ' selected';
					break;
        }
				if (
					(Math.floor(sections[i].pos) > 0 &&
					Math.floor(sections[i].pos) < windowSize / 2) ||
          (
					Math.floor(sections[i + 1].pos) > windowSize / 2)
				) {
					sections[i].elem.current.className =
						sections[i].elem.current.className + ' selected';
					break;
				}
			}
		});
	}, []);

	return (
		<div className="nav" ref={(el) => {}}>
			<button onClick={() => scrollToSection('sectionAbout')} ref={aboutBtn}>
				ABOUT
			</button>
			<button onClick={() => scrollToSection('sectionSkills')} ref={skillsBtn}>
				SKILLS
			</button>
			<button
				onClick={() => scrollToSection('sectionProjects')}
				ref={projectsBtn}
			>
				PROJECTS
			</button>
			<button
				onClick={() => scrollToSection('sectionContact')}
				ref={contactBtn}
			>
				CONTACT
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
