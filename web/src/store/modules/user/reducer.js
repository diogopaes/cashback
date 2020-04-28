import produce from 'immer';

const INITIAL_STATE = {
  reseller: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.reseller = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.reseller = action.payload.reseller;
        break;
      }
      case '@user/UPDATE_CASHBACK_SUCCESS': {
        draft.reseller = action.payload.user;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.reseller = null;
        break;
      }
      default:
    }
  });
}
