import React, { ReactNode } from 'react';
import { Container, Box } from '@mui/material';

export default function MainContainer({ children }: { children: ReactNode }) {
	return (
		<Box sx={{ display: 'flex' }}>
			<Container sx={{ paddingTop: 10 }}>{children}</Container>
		</Box>
	);
}
