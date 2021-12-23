import { CHANGE_MODE, CHANGE_LANG } from './actions';

const initialState = {
	mode: 'LightMode',
	language: 'EN',
};

function rootReducer(state = initialState, { type, payload }) {
	switch (type) {
		case CHANGE_MODE:
			if (state.mode === 'LightMode') {
				return { ...state, mode: 'DarkMode' };
			} else {
				return { ...state, mode: 'LightMode' };
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
