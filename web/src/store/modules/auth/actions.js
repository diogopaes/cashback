export function signInRequest(identifier, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { identifier, password },
  };
}

export function signInSuccess(jwt, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { jwt, user },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
