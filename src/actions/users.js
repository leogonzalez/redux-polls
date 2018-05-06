export const RECEIVE_USERS = "RECEIVE_USERS";

// this is a plain action creator. It should return action, which is a plain object with a type property

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}
