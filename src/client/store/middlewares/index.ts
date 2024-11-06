import { all, fork } from 'redux-saga/effects';

import { addressSagaWatcher } from './address.middleware';
import { cartSagaWatcher } from './cart.middleware';

function* rootSaga() {
  yield all([fork(addressSagaWatcher)]);
  yield all([fork(cartSagaWatcher)]);
}

export default rootSaga;
