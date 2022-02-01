import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import './Project.css';
import { BsGithub } from 'react-icons/bs';
import parse from 'html-react-parser';

function Project({ name, summary, video, screenshots, github, link }) {
	return (
		<div className="project">
			<h3>{name}</h3>
			<p>{parse(summary)}</p>
			{link.length ? (
				<a href={link} target="blank">
					<p>App Online</p>
				</a>
			) : null}
			<a href={github} target="blank">
				<p>
					<BsGithub />
					{github.replace('https://github.com/manuelrmauro', '')}
				</p>
			</a>
			{video.length ? (
				<div className="videoWraper">
					<ReactPlayer
						width="95%"
						height="95%"
						className="projectVideo"
						url={video}
						playsinline={true}
					/>
				</div>
			) : null}
		</div>
	);
}

export default connect(null, null)(Project);
