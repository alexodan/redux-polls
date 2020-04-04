import { LOAD_INITIAL_DATA } from "../actions/shared";

export function users(state = [], action) {
  switch (action.type) {
    case LOAD_INITIAL_DATA:
      console.log(action.users);
      return action.users;
    default:
      return state;
  }
}
