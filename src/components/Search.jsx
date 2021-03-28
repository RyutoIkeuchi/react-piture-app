import React, { useState } from 'react';

export const Search = ({ setQuery }) => {
	const [text, setText] = useState('');

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
