const getIsAuthenticated = state => Boolean(state.auth.token);
const getToken = state => state.auth.token;
const getUsername = state => state.auth.user.name;
const getError = state => state.auth.error;
export { getIsAuthenticated, getUsername, getToken, getError };
