import React, { useState } from 'react';
import './App.css';
import { Search } from './components/Search';

export const App = () => {
	const [images, setImages] = useState([]);

	return (
		<div className="App">
			<Search setImages={setImages} />

			<div className="container">
				{images.map((image) => (
					<div key={image.id} className="card">
						<img src={image.urls.regular} className="card-img" alt="" />
						<div className="card-content">
							<div className="card-title">{image.alt_description}</div>
						</div>
						<div className="card-name">
							<img
								src={image.user.profile_image.small}
								className="card-thumb"
								alt=""
							/>
							<p className="card-author">{image.user.first_name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
