import { LOAD_USERS } from '../actions/users';
import { SAVE_POLL } from '../actions/polls';
import { ANSWER_POLL } from '../actions/answers';

export function users(state = {}, action) {
	switch (action.type) {
		case LOAD_USERS:
			return {
				...state,
				...action.users
			};
		case SAVE_POLL:
			const { author } = action.poll;
			return {
				...state,
				[author]: {
					...state[author],
					polls: [ ...state[author].polls, action.poll.id ]
				}
			};
		case ANSWER_POLL:
			const user = state[action.authedUser];
			return {
				...state,
				[action.authedUser]: {
					...user,
					answers: [ ...user.answers, action.id ]
				}
			};
		default:
			return state;
	}
}
