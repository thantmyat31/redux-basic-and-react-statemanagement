import React from 'react';
import { connect } from 'react-redux';

const GalleryItems = ({ photos, page }) => {
	return (
		<div className="gallery">
			{photos.length > 0 ? (
				photos
					.filter((photo) => photo.id < page * 10)
					.map((photo) => <img className="image" key={photo.id} src={photo.url} alt="unsplash" />)
			) : null}
		</div>
	);
};

const mapStateToProps = (state) => ({
	photos: state.photo.photos,
	page: state.photo.page
});

export default connect(mapStateToProps)(GalleryItems);
