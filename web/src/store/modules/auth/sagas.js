import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

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
    toast.error('Falha na autenticação');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, username, email, cpf, password } = payload;

    yield call(api.post, 'auth/local/register', {
      name,
      username,
      email,
      cpf,
      password,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, confira seus dados');

    yield put(signFailure());
  }
}

export function setJwt({ payload }) {
  if (!payload) return;

  const { jwt } = payload.auth;

  if (jwt) {
    api.defaults.headers.Authorization = `Bearer ${jwt}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setJwt),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
