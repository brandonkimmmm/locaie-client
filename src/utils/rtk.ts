import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../app/store';
import { API_URL } from '../constants';

const emptySplitApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const { token } = (getState() as RootState).auth;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}
			return headers;
		}
	}),
	endpoints: () => ({})
});

export default emptySplitApi;
