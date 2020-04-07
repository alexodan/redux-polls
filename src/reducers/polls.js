import { LOAD_POLLS } from '../actions/polls';

export function polls(state = {}, action) {
	switch (action.type) {
		case LOAD_POLLS:
			return {
				...state,
				...action.polls
			};
		default:
			return state;
	}
}
