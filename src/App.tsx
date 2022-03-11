import { CssBaseline } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
	return (
		<>
			<CssBaseline />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
