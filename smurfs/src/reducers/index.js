import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE,
		 FETCH_SMURFSINGLE_START, FETCH_SMURFSINGLE_SUCCESS, FETCH_SMURFSINGLE_FAILURE,
         POST_SMURF_START, POST_SMURF_SUCCESS, POST_SMURF_FAILURE,
         PUT_SMURF_START, PUT_SMURF_SUCCESS, PUT_SMURF_FAILURE,
         DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE } from "../actions";

const initialState = {
	smurfs:        		  [],
	editSmurf:     		  {},
	fetchingSmurfs: 	  false,
	fetchingSmurfSingle:  false,
	addingSmurf:    	  false,
	updatingSmurf:  	  false,
	deletingSmurf: 		  false,
	error:         		  null,
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
				fetchingSmurfs: true,
				error: null,
			};
		case FETCH_SMURFS_SUCCESS:
			return {
				...state,
				fetchingSmurfs: false,
				smurfs: action.payload,
			};
		case FETCH_SMURFS_FAILURE:
			return {
				...state,
				fetchingSmurfs: false,
				error: `${action.payload}`,
			};



		case FETCH_SMURFSINGLE_START:
			return {
				...state,
				fetchingSmurfSingle: true,
				error: null,
			};
		case FETCH_SMURFSINGLE_SUCCESS:
			return {
				...state,
				fetchingSmurfSingle: false,
				editSmurf: action.payload,
			};
		case FETCH_SMURFSINGLE_FAILURE:
			return {
				...state,
				fetchingSmurfSingle: false,
				error: `${action.payload}`,
			};



		case POST_SMURF_START:
			return {
				...state,
				addingSmurf: true,
				error: null,
			};
		case POST_SMURF_SUCCESS:
			return {
				...state,
				addingSmurf: false,
				smurfs: action.payload,
			};
		case POST_SMURF_FAILURE:
			return {
				...state,
				addingSmurf: false,
				error: `${action.payload}`,
			};



		case PUT_SMURF_START:
			return {
				...state,
				updatingSmurf: true,
				error: null,
			};
		case PUT_SMURF_SUCCESS:
			return {
				...state,
				updatingSmurf: false,
				smurfs: action.payload,
				editSmurf: {} // After editing, we don't want to return to the form with edit data. Reset it!
			};
		case PUT_SMURF_FAILURE:
			return {
				...state,
				updatingSmurf: false,
				error: `${action.payload}`,
			};



		case DELETE_SMURF_START:
			return {
				...state,
				deletingSmurf: true,
				error: null,
			};
		case DELETE_SMURF_SUCCESS:
			return {
				...state,
				deletingSmurf: false,
				smurfs: action.payload,
			};
		case DELETE_SMURF_FAILURE:
			return {
				...state,
				deletingSmurf: false,
				error: `${action.payload}`,
			};



		default:
			return state;
	}
};
