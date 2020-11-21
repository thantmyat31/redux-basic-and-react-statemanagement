import React from 'react';
import { connect } from 'react-redux';
import { fetchActionStart } from './../redux/app.action';
import GalleryItems from './gallery-items';
import WithSpinnerContainer from './hoc/spinner';

const WrappedComponent = WithSpinnerContainer(GalleryItems);
class Gallery extends React.Component {
	render() {
		const { loadImage, loading } = this.props;
		return (
			<React.Fragment>
				<WrappedComponent isLoading={loading} />
				<div className="button-container">
					<button className="button" onClick={loadImage}>
						LOAD IMAGES
					</button>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state.photo.loading
});

const mapDispatchToProps = (dispatch) => ({
	loadImage: () => dispatch(fetchActionStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
