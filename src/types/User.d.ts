import type { CommonModelAttributes } from './common';

export type ValidUserRole = 'user' | 'admin';

export interface User extends CommonModelAttributes {
	email: string;
	role: ValidUserRole;
	username: string;
	first_name: string;
	last_name: string;
	avatar_url: string | null;
	total_bookings: number;
	total_revenue: number;
}
