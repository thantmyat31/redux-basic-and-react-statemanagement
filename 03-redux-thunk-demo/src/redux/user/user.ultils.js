export const selectUserSearch = (users, query) => {
	if (query.length > 0) {
		return users.filter((user) => user.name.toLowerCase().startsWith(query.toLowerCase()));
	}
};
