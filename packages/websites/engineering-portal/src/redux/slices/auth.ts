import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { errorLog } from '@namespace/web-shared/utils/logger';

import { ErrorPayload } from '../../types/ErrorPayload';
import { IAM } from '../../types/IAM';
import requestAPI from '../../utils/requestAPI';

export const fetchIdentity = createAsyncThunk(
  'auth/fetchIdentity',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const requestData = {
        method: 'get',
        url: '/api/get-identity',
      };

      const data: IAM = await requestAPI(requestData);
      return fulfillWithValue(data);
    } catch (error) {
      errorLog('fetchIdentity - error', error);
      return rejectWithValue({
        status: error.response?.status,
        data: error.response?.data?.err || error.message,
      });
    }
  },
);

export const authSelector = ({ auth }: { auth: AuthState }): AuthState => auth;

interface AuthState {
  isLoading: boolean;
  authenticatedProfile?: IAM;
  error?: ErrorPayload;
  isFetched: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  authenticatedProfile: null,
  error: null,
  isFetched: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIdentity.pending, () => ({
      isLoading: true,
      authenticatedProfile: null,
      error: null,
      isFetched: false,
    }));
    builder.addCase(
      fetchIdentity.fulfilled,
      (state: AuthState, { payload }: PayloadAction<IAM>) => ({
        ...state,
        isLoading: false,
        authenticatedProfile: payload,
        isFetched: true,
      }),
    );
    builder.addCase(
      fetchIdentity.rejected,
      (state: AuthState, { payload }: PayloadAction<ErrorPayload>) => ({
        ...state,
        isLoading: false,
        error: payload,
        isFetched: true,
      }),
    );
  },
});

export default authSlice.reducer;
