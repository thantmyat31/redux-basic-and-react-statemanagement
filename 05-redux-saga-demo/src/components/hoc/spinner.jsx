import React from 'react';

const WithSpinnerContainer = (WrappedComponent) => {
	const spinner = ({ isLoading, ...rest }) => {
		return isLoading ? <div className="spinner-container" /> : <WrappedComponent {...rest} />;
	};

	return spinner;
};

export default WithSpinnerContainer;
