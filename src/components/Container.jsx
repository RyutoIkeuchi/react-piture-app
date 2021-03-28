export const Container = (props) => {
  return (
		<div className="container">
			{props.images.map((image) => (
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
	);
}