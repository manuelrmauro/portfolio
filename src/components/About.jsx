import React from 'react';
import { connect } from 'react-redux';
import './About.css'

function About({ language, mode }) {
	return (
		<div className={`container container${mode} section sectionAbout`}>
			{language === 'EN' && <h2>About</h2>}
			{language === 'ES' && <h2>Sobre mi</h2>}
			<div className="aboutContainer">
				<p>
					asjdhashdkhashdhas texto ioasjdjkasdh asd jasdkhhkashdbakhsdkh asd
					hkahgksbhasdghadshkadsbkhash dhg adsbgasdgkj ah si aca pruebo blab abl
					chicos? YA les dije que soy Gabiel Rolom? asjdhashdkhashdhas texto
					ioasjdjkasdh asd jasdkhhkashdbakhsdkh asd hkahgksbhasdghadshkadsbkhash
					dhg adsbgasdgkj ah si aca pruebo blab abl chicos? YA les dije que soy
					Gabiel Rolom ?asjdhashdkhashdhas texto ioasjdjkasdh asd
					jasdkhhkashdbakhsdkh asd hkahgksbhasdghadshkadsbkhash dhg adsbgasdgkj
					ah si aca pruebo blab abl chicos? YA les dije que soy Gabiel Rolom?
					asjdhashdkhashdhas texto ioasjdjkasdh asd jasdkhhkashdbakhsdkh asd
					hkahgksbhasdghadshkadsbkhash dhg adsbgasdgkj ah si aca pruebo blab abl
					chicos? YA les dije que soy Gabiel Rolom? asjdhashdkhashdhas texto
					ioasjdjkasdh asd jasdkhhkashdbakhsdkh asd hkahgksbhasdghadshkadsbkhash
					dhg adsbgasdgkj ah si aca pruebo blab abl chicos? YA les dije que soy
					Gabiel Rolom?
				</p>
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
