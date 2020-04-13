import { LOAD_POLLS, SAVE_POLL } from '../actions/polls';
import { ANSWER_POLL } from '../actions/answers';

export function polls(state = {}, action) {
	switch (action.type) {
		case LOAD_POLLS:
			return {
				...state,
				...action.polls
			};
		case SAVE_POLL:
			return {
				...state,
				[action.poll.id]: action.poll
			};
		case ANSWER_POLL:
			const { authedUser, id, answer } = action;
			const poll = state[id];
			const votesKey = answer + 'Votes';
			return {
				...state,
				[id]: {
					...poll,
					[votesKey]: [ ...poll[votesKey], authedUser ]
				}
			};
		default:
			return state;
	}
}
