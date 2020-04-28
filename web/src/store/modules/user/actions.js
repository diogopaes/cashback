export function updateResellerRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateResellerSuccess(reseller) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { reseller },
  };
}

export function updateResellerFailure() {
  return {
    type: '@user/UPDATE_FAILURE',
  };
}

export function updateCashbackRequest(data) {
  return {
    type: '@user/UPDATE_CASHBACK_REQUEST',
    payload: { data },
  };
}

export function updateCashbackSuccess(reseller) {
  return {
    type: '@user/UPDATE_CASHBACK_SUCCESS',
    payload: { reseller },
  };
}
