import { getInitialData } from "../utils/api";

export const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA";

function loadInitialData(users, polls) {
  return {
    type: LOAD_INITIAL_DATA,
    users,
    polls
  };
}

export function handleInitialDataLoad() {
  return dispatch => {
    getInitialData().then(({ users, polls }) => {
      dispatch(loadInitialData(users, polls));
    });
  };
}

// conecte redux con el index
// app component hace el fectch de initial data
// users y polls reducers handlean load initial data pero raro
//    retornan un objeto en lugar de un array

// next steps:
// build the dashboard?

// mercadolibre
// auth0
