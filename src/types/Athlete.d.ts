import type { CommonModelAttributes } from './common';
import type { School } from './School';

export interface Athlete extends CommonModelAttributes {
	sport: string;
	bio: string;
	first_name: string;
	middle_name?: string | null;
	last_name: string;
	schools: School[];
}
