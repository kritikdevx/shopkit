import { all, fork } from 'redux-saga/effects';

import { cartSagaWatcher } from './cart.middleware';

function* rootSaga() {
  yield all([fork(cartSagaWatcher)]);
}

export default rootSaga;
