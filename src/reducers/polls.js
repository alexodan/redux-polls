import { LOAD_INITIAL_DATA } from "../actions/shared";

export function polls(state = [], action) {
  switch (action.type) {
    case LOAD_INITIAL_DATA:
      return action.polls;
    default:
      return state;
  }
}
