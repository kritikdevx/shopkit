import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getCustomerProfile,
  updateCustomerProfile,
} from '@/common/api/services';
import { GetCustomerProfileQueryVariables } from '@/common/types/queries/customer';
import {
  getProfileFailure,
  getProfileSuccess,
  updateProfileFailure,
  updateProfileSuccess,
} from '../slices/customer.slice';
import { customerActions } from '../actions';
import { UpdateCustomerProfileMutationVariables } from '@/common';

export function* getProfileSaga(action: {
  type: string;
  payload: GetCustomerProfileQueryVariables;
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

export function* updateProfileSaga(action: {
  type: string;
  payload: UpdateCustomerProfileMutationVariables;
}): Generator {
  try {
    const { customer, customerUserErrors } = yield call(updateCustomerProfile, {
      variables: action.payload,
    });

    if (customerUserErrors.length > 0) {
      throw new Error(
        customerUserErrors[0].code + customerUserErrors[0].message,
      );
    }

    yield put(updateProfileSuccess(customer));
  } catch (error) {
    yield put(
      updateProfileFailure(
        (error as Error).message || 'Failed to update profile',
      ),
    );
  }
}

export function* customerSagaWatcher() {
  yield takeLatest(customerActions.startGetProfile, getProfileSaga);
  yield takeLatest(customerActions.startUpdateProfile, updateProfileSaga);
}
