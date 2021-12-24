import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import './Project.css';
import {BsGithub} from 'react-icons/bs'


function Project({ name, summary, video, screenshots, github }) {
	return (
		<div className="project">
			<h3>{name}</h3>
			<p>{summary}</p>
			<a href={github} target="blank"><p><BsGithub/>{github.replace('https://github.com/manuelrmauro','')}</p></a>
			<div className="videoWraper">
				<ReactPlayer
					width='100%'
					height='100%'
					className="projectVideo"
					url={video}
				/>
			</div>
				
		</div>
	);
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(Project);
