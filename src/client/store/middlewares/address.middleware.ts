import { call, put, takeLatest } from 'redux-saga/effects';

import { ListAddressesQuery, ListAddressesQueryVariables } from '@/common';
import { listCustomerAddresses } from '@/common/api/services';

import {
  listAddressesSuccess,
  listAddressesFailure,
} from '../slices/address.slice';
import { addressActions } from '../actions/address.action';

export function* listAddressesSaga(action: {
  type: string;
  payload: ListAddressesQueryVariables;
}): Generator {
  try {
    const { addresses, defaultAddress } = (yield call(listCustomerAddresses, {
      variables: action.payload,
    })) as ListAddressesQuery['customer'];

    yield put(
      listAddressesSuccess({
        addresses,
        defaultAddress,
      }),
    );
  } catch (error) {
    console.log('error', error);
    yield put(listAddressesFailure((error as Error).message));
  }
}

export function* addressSagaWatcher() {
  yield takeLatest(addressActions.startListAddressesRequest, listAddressesSaga);
}
