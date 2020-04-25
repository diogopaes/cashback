import produce from 'immer';

const INITIAL_STATE = {
  jwt: null,
  isSigned: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.jwt = action.payload.jwt;
        draft.isSigned = true;
      });
    default:
      return state;
  }
}
