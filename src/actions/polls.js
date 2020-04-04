import { savePoll } from "../utils/api";

export const SAVE_POLL = "SAVE_POLL";

function saveNewPoll(poll) {
  return {
    type: SAVE_POLL,
    poll
  };
}

export function handleCreatePoll(poll) {
  return dispatch => {
    dispatch(saveNewPoll(poll));
    savePoll(poll);
    // .catch(err => {
    //   console.error(err);
    //   dispatch(removePoll());
    // })
  };
}
