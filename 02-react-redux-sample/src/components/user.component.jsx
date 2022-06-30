import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './../redux/user/user.action';

const UserContainer = ({ userData, fetchUser }) => {
	useEffect(
		() => {
			fetchUser();
		},
		[ fetchUser ]
	);

	return userData.loading ? (
		<h2>Loading</h2>
	) : userData.error ? (
		<h2>{userData.error}</h2>
	) : (
		<div>
			<h2>Users List</h2>
			<div>{userData && userData.users && userData.users.map((user) => <p key={user.id}>{user.name}</p>)}</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		userData: state.user
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchUser: () => dispatch(fetchUser())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
