import { CHANGE_MODE, CHANGE_LANG } from './actions';

const initialState = {
	mode: 'lightMode',
	language: 'EN',
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case CHANGE_MODE:
			if (state.mode === 'lightMode') {
				return { ...state, mode: 'darkMode' };
			} else {
				return { ...state, mode: 'lightMode' };
			}
		case CHANGE_LANG:
			if (state.language === 'EN') {
				return { ...state, language: 'ES' };
			} else {
				return { ...state, language: 'EN' };
			}
		default:
			return state;
	}
}

export default rootReducer;
