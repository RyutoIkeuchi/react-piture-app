import React, { useState, useEffect } from 'react';
import './App.css';
import { Search } from './components/Search';
import { Container } from './components/Container';

export default function App() {
	const [images, setImages] = useState([]);
	const [query, setQuery] = useState('soccer');

	useEffect(() => {
		console.log('useEffect');
		fetch(
			`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`
		)
			.then((Response) => Response.json())
			.then((data) => {
				console.log(data);
				setImages(data.results);
			});
	}, [query]);

	return (
		<div className="App">
			<Search setQuery={setQuery} />
			<Container images={images} />
		</div>
	);
}
