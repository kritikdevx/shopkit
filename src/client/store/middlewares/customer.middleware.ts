import { getCustomerProfile } from '@/common/api/services';
import { GetProfileQueryVariables } from '@/common/types/queries/customer';
import { customerActions } from '../actions/customer.action';
import { getProfileFailure, getProfileSuccess } from '../slices/customer.slice';
import { call, put, takeLatest } from 'redux-saga/effects';

export function* getProfileSaga(action: {
  type: string;
  payload: GetProfileQueryVariables;
}): Generator {
  try {
    const customer = yield call(getCustomerProfile, {
      variables: action.payload,
    });

    yield put(getProfileSuccess(customer));
  } catch (error) {
    console.error(error);
    yield put(getProfileFailure());
  }
}
export function* customerSagaWatcher() {
  yield takeLatest(customerActions.startGetProfile, getProfileSaga);
}
