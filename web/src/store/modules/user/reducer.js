import produce from 'immer';

const INITIAL_STATE = {
  reseller: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.reseller = action.payload.user;
      });
    default:
      return state;
  }
}
