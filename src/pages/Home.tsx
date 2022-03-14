import React from 'react';
import Map from 'react-map-gl';
import MainContainer from '../layouts/MainContainer';

export default function Home() {
	return (
		<MainContainer>
			<Map
				initialViewState={{
					longitude: -122.4,
					latitude: 38.8,
					zoom: 14
				}}
				style={{ width: 600, height: 400 }}
				mapStyle='mapbox://styles/mapbox/streets-v9'
			/>
		</MainContainer>
	);
}
