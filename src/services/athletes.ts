import { Athlete } from '../types/Athlete';
import emptySplitApi from '../utils/rtk';

type GetAthetesQuery = {
	min_lat?: number;
	max_lat?: number;
	min_lng?: number;
	max_lng?: number;
};

export const athleteApi = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		getAthletes: builder.query<Athlete[], GetAthetesQuery>({
			query: (params) => ({
				url: '/athletes',
				method: 'GET',
				params
			})
		})
	})
});

export const { useLazyGetAthletesQuery } = athleteApi;
