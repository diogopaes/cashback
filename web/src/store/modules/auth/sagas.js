import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { identifier, password } = payload;

    const response = yield call(api.post, 'auth/local', {
      identifier,
      password,
    });

    const { jwt, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${jwt}`;

    yield put(signInSuccess(jwt, user));

    history.push('/dashboard');
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
