import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

export default function LoadingOverlay() {
	return (
		<Backdrop open sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
			<CircularProgress color='inherit' />
		</Backdrop>
	);
}
