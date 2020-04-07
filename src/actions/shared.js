import { getInitialData } from '../utils/api';
import { loadUsers } from './users';
import { loadPolls } from './polls';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialDataLoad() {
	return (dispatch) => {
		dispatch(showLoading());
		getInitialData().then(({ users, polls }) => {
			dispatch(loadUsers(users));
			dispatch(loadPolls(polls));
			dispatch(setAuthedUser(AUTHED_ID));
			dispatch(hideLoading());
		});
	};
}
