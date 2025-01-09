import { call, put, takeLatest } from 'redux-saga/effects';

import {
  CartAttributesUpdateMutation,
  CartAttributesUpdateMutationVariables,
  CartDiscountCodesUpdateMutation,
  CartDiscountCodesUpdateMutationVariables,
  CreateCartMutation,
  GetCartQuery,
  GetCartQueryVariables,
} from '@/common';
import {
  createCart,
  getCart,
  updateCartAttributes,
  updateCartDiscountCodes,
} from '@/common/api/services';

import {
  getCartSuccess,
  getCartFailure,
  updateCartDiscountCodesSuccess,
  updateCartDiscountCodesFailure,
} from '../slices/cart.slice';
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
    yield put(getCartFailure());
  }
}

export function* createCartSaga(action: { type: string }): Generator {
  try {
    const { cart } = (yield call(createCart, {
      variables: {},
    })) as CreateCartMutation['cartCreate'];

    yield put(getCartSuccess(cart));
  } catch (error) {
    yield put(getCartFailure());
  }
}

export function* updateCartAttributesSaga(action: {
  type: string;
  payload: CartAttributesUpdateMutationVariables;
}): Generator {
  try {
    const { cart } = (yield call(updateCartAttributes, {
      variables: action.payload,
    })) as CartAttributesUpdateMutation['cartAttributesUpdate'];

    yield put(getCartSuccess(cart));
  } catch (error) {
    yield put(getCartFailure());
  }
}

export function* updateCartDiscountCodesSaga(action: {
  type: string;
  payload: CartDiscountCodesUpdateMutationVariables;
}): Generator {
  try {
    const { cart } = (yield call(updateCartDiscountCodes, {
      variables: action.payload,
    })) as CartDiscountCodesUpdateMutation['cartDiscountCodesUpdate'];

    yield put(updateCartDiscountCodesSuccess(cart));
  } catch (error) {
    yield put(updateCartDiscountCodesFailure());
  }
}

export function* cartSagaWatcher() {
  yield takeLatest(cartActions.startGetCartRequest, getCartSaga);
  yield takeLatest(cartActions.startCreateCartRequest, createCartSaga);
  yield takeLatest(
    cartActions.startUpdateCartAttributesRequest,
    updateCartAttributesSaga,
  );
  yield takeLatest(
    cartActions.startUpdateCartDiscountCodesRequest,
    updateCartDiscountCodesSaga,
  );
}
