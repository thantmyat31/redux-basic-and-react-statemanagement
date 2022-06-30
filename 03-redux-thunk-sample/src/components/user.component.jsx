import React from 'react';

import { fetchUser } from './../redux/user/user.action';
import { connect } from 'react-redux';

class UserContainer extends React.Component {
	componentDidMount() {
		const { fetchUser } = this.props;
		fetchUser();
	}

	render() {
		const { users } = this.props;
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
						</tr>
					</thead>

					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.users.query ? state.users.userFiltered : state.users.users
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUser: () => dispatch(fetchUser())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
