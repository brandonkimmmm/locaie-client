import { Room } from '@mui/icons-material';
import { IconButton, Popover, Typography } from '@mui/material';
import React, { useState, MouseEvent } from 'react';
import { Marker } from 'react-map-gl';
import { Athlete } from '../../types/Athlete';

export default function AthleteMarker({ athlete }: { athlete: Athlete }) {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const handleOpen = (e: MouseEvent<HTMLElement>) => {
		console.log('hello');
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Marker longitude={athlete.schools[0].longitude} latitude={athlete.schools[0].latitude}>
			<IconButton size='large' color='error' onMouseEnter={handleOpen} onMouseLeave={handleClose}>
				<Room />
				<Popover
					open={Boolean(anchorEl)}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left'
					}}
					onClose={handleClose}
				>
					<Typography>
						{athlete.first_name} {athlete.last_name}
					</Typography>
				</Popover>
			</IconButton>
		</Marker>
	);
}
