import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  updateResellerSuccess,
  updateResellerFailure,
  updateCashbackSuccess,
} from './actions';

export function* updateReseller({ payload }) {
  try {
    const { id, name, email, ...rest } = payload.data;

    // eslint-disable-next-line prefer-object-spread
    const reseller = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, `users/${id}`, reseller);

    toast.success('Conta de revendedor(a) atualizada com sucesso!');

    yield put(updateResellerSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao tentar atualizar conta');
    yield put(updateResellerFailure());
  }
}

export function* updateCashback({ payload }) {
  try {
    const { id, cashback } = payload.data;

    const response = yield call(api.put, `users/${id}`, cashback);

    toast.success('Conta de revendedor(a) atualizada com sucesso!');

    yield put(updateCashbackSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao tentar atualizar conta');
    yield put(updateResellerFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateReseller),
  takeLatest('@user/UPDATE_CASHBACK_REQUEST', updateCashback),
]);
