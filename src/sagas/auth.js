import { put, call } from 'redux-saga/effects';
import { loginUser, registerUser } from '../services/auth';

import * as types from '../actions'

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUser, payload);

    yield put({ type: types.LOGIN_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUser, payload);

    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error })
  }
}