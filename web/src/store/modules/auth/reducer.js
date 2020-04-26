import produce from 'immer';

const INITIAL_STATE = {
  jwt: null,
  isSigned: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.jwt = action.payload.jwt;
        draft.isSigned = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.jwt = null;
        draft.isSigned = false;
        break;
      }
      default:
    }
  });
}
