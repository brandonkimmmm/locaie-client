import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import type { User } from '../../types/User';

export interface AuthState {
	user: User | null;
	token: string | null;
}

const initialState: AuthState = {
	user: null,
	token: null
} as AuthState;

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		resetAuth: (state) => {
			localStorage.removeItem('token');
			state.user = null;
			state.token = null;
		},
		setCredentials: (state, action: PayloadAction<AuthState>) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		}
	}
});

export const { resetAuth, setCredentials } = authSlice.actions;

export const getCurrentUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
