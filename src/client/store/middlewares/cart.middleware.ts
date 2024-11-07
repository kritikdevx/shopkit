import { call, put, takeLatest } from 'redux-saga/effects';

import {
  CreateCartMutation,
  GetCartQuery,
  GetCartQueryVariables,
} from '@/common';
import { createCart, getCart } from '@/common/api/services';

import { getCartSuccess, getCartFailure } from '../slices/cart.slice';
import { cartActions } from '../actions/cart.action';

export function* getCartSaga(action: {
  type: string;
  payload: GetCartQueryVariables;
}): Generator {
  try {
    const { cart } = (yield call(getCart, {
      variables: action.payload,
    })) as GetCartQuery;

    yield put(getCartSuccess(cart));
  } catch (error) {
    console.log('error', error);
    yield put(getCartFailure());
  }
}

export function* createCartSaga(action: { type: string }): Generator {
  try {
    const { cartCreate } = (yield call(createCart, {
      variables: {},
    })) as CreateCartMutation;

    yield put(getCartSuccess(cartCreate.cart));
  } catch (error) {
    console.log('error', error);
    yield put(getCartFailure());
  }
}

export function* cartSagaWatcher() {
  yield takeLatest(cartActions.startGetCartRequest, getCartSaga);
  yield takeLatest(cartActions.startCreateCartRequest, createCartSaga);
}
