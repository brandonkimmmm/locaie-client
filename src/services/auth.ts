import type { User } from '../types/User';
import emptySplitApi from '../utils/rtk';

type PostLoginBody = {
	email?: User['email'];
	username?: User['username'];
	password: string;
};

type PostLoginResponse = {
	token: string;
	user: User;
};

type PostSignupBody = Required<PostLoginBody> & {
	password_confirmation: string;
	first_name: User['first_name'];
	last_name: User['last_name'];
};

type PostSignupResponse = {
	message: string;
};

type GetUserResponse = User;

export const authApi = emptySplitApi.injectEndpoints({
	endpoints: (builder) => ({
		postLogin: builder.mutation<PostLoginResponse, PostLoginBody>({
			query: (body) => ({
				url: '/auth/login',
				method: 'POST',
				body
			})
		}),
		postSignup: builder.mutation<PostSignupResponse, PostSignupBody>({
			query: (body) => ({
				url: '/auth/signup',
				method: 'POST',
				body
			})
		}),
		checkToken: builder.query<GetUserResponse, string>({
			query: (token) => ({
				url: '/user',
				method: 'GET',
				headers: {
					authorization: `Bearer ${token}`
				}
			})
		})
	})
});

export const { usePostLoginMutation, usePostSignupMutation, useLazyCheckTokenQuery } = authApi;
