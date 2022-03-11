import type { CommonModelAttributes } from './common';

export interface School extends CommonModelAttributes {
	athlete_id: number;
	type: string;
	name: string;
	description: string;
	street_address: string;
	city: string;
	country: string;
	administration_area?: string | null;
	postal_code: string;
	latitude: number;
	longitude: number;
}
