import React from 'react';
import Map, { Marker } from 'react-map-gl';
import Box from '@mui/material/Box';
import { useEffectOnce } from 'usehooks-ts';
import AthleteMarker from '../features/athlete/AthleteMarker';
import { useLazyGetAthletesQuery } from '../services/athletes';
import LoadingOverlay from '../components/LoadingOverlay';

export default function Home() {
	const [getAthletes, athletes] = useLazyGetAthletesQuery();

	useEffectOnce(() => {
		(async () => {
			getAthletes({});
		})();
	});

	if (!athletes.isSuccess) {
		return <LoadingOverlay />;
	}

	return (
		<Box sx={{ width: '100%', height: '100vh' }}>
			<Map
				initialViewState={{
					longitude: -118.27,
					latitude: 34,
					zoom: 10
				}}
				style={{ width: '100%', height: '100vh' }}
				mapStyle='mapbox://styles/brandonkimmmm/cl24lmbiu00h815qj3z3uvl5v'
			>
				{athletes.data.map((item) => (
					<AthleteMarker key={item.id} athlete={item} />
				))}
			</Map>
		</Box>
	);
}
