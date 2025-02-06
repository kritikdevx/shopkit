import { all, fork } from 'redux-saga/effects';

import { cartSagaWatcher } from './cart.middleware';
import { customerSagaWatcher } from './customer.middleware';

function* rootSaga() {
  yield all([fork(cartSagaWatcher)]);
  yield all([fork(customerSagaWatcher)]);
}

export default rootSaga;
