import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE,
         POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE,
         PUT_SMURF_START, PUT_SMURF_SUCCESS, PUT_SMURF_FAILURE,
         DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE } from "../actions";

//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null,
};

/*
    You'll only need one smurf reducer for this project.
    Feel free to export it as a default and import as rootReducer. 
    This will guard your namespacing issues.
    There is no need for 'combineReducers' in this project.
    Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const reducer = (state = initialState, action) => {
	switch (action.type) {

		case FETCH_SMURFS_START:
			return {
				...state,
				fetchingFriends: true,
				error: null,
			};
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				fetchingFriends: false,
				friends: action.payload,
			};
		case FETCH_SMURFS_FAILURE:
			return {
				...state,
				fetchingFriends: false,
				error: `${action.payload}`,
			};

		case POST_SMURF_START:
			return {
				...state,
				addingFriend: true,
				error: null,
			};
		case POST_SMURF_SUCCESS:
			return {
				...state,
				addingFriend: false,
				friends: action.payload,
			};
		case POST_SMURF_FAILURE:
			return {
				...state,
				addingFriend: false,
				error: `${action.payload}`,
			};

		case PUT_SMURF_START:
			return {
				...state,
				updatingFriend: true,
				error: null,
			};
		case PUT_SMURF_SUCCESS:
			return {
				...state,
				updatingFriend: false,
				friends: action.payload,
			};
		case PUT_SMURF_FAILURE:
			return {
				...state,
				updatingFriend: false,
				error: `${action.payload}`,
			};

		case DELETE_SMURF_START:
			return {
				...state,
				deletingFriend: true,
				error: null,
			};
		case DELETE_SMURF_SUCCESS:
			return {
				...state,
				deletingFriend: false,
				friends: action.payload,
			};
		case DELETE_SMURF_FAILURE:
			return {
				...state,
				deletingFriend: false,
				error: `${action.payload}`,
			};

		default:
			return state;
	}
};
