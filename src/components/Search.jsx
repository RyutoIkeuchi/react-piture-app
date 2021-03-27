import React, { useState, useEffect } from 'react';

export const Search = ({ setImages }) => {
	const [text, setText] = useState('');
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

	const onSubmit = (e) => {
		e.preventDefault();
		setQuery(text);
		setText('');
		console.log('onSubmit');
	};

	return (
		<React.Fragment>
			<div className="main">
				<div className="header">
					<p>search photo app</p>
				</div>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						onChange={(e) => setText(e.target.value)}
						value={text}
						placeholder="search photos name"
					/>
					<button type="submit">Search</button>
				</form>
				<div className="example">for example:apple,baseball</div>
			</div>
		</React.Fragment>
	);
};
