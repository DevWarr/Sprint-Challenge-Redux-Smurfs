import axios from "axios";



export const FETCH_SMURFS_START =       "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS =     "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE =     "FETCH_SMURFS_FAILURE";
export const fetchSmurfs = () => dispatch => {

    dispatch({ type: FETCH_SMURFS_START });

    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: err });
        });
}



export const FETCH_SMURFSINGLE_START =     "FETCH_SMURFSINGLE_START";
export const FETCH_SMURFSINGLE_SUCCESS =   "FETCH_SMURFSINGLE_SUCCESS";
export const FETCH_SMURFSINGLE_FAILURE =   "FETCH_SMURFSINGLE_FAILURE";
export const fetchSmurfSingle = id => dispatch => {

    dispatch({ type: FETCH_SMURFSINGLE_START });

    /*  We return this axios call as a function.
        If we CAN find a smurf in our server to edit, return true.
        If we CAN'T find a smurf, return false.
        This will determine whether we redirect to the smurf-form or not
    */
    return axios
        .get(`http://localhost:3333/smurfs/`)
        .then(res => {
            console.log(res);
            const editSmurf = res.data.find(smurf => smurf.id === id);
            if (!editSmurf) {
                dispatch({ type: FETCH_SMURFSINGLE_FAILURE, payload: "This Smurf id doesn't exit!" });
                return false; // No smurf found!
            }
            dispatch({ type: FETCH_SMURFSINGLE_SUCCESS, payload: editSmurf });
            return true; // Smurf found! Let's edit!
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_SMURFSINGLE_FAILURE, payload: err });
        });
}



export const POST_SMURF_START =     "POST_SMURF_START";
export const POST_SMURF_SUCCESS =   "POST_SMURF_SUCCESS";
export const POST_SMURF_FAILURE =   "POST_SMURF_FAILURE";
export const postSmurf = smurf => dispatch => {
    
    dispatch({ type: POST_SMURF_START });

    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then( res => {
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: POST_SMURF_FAILURE, payload: err }))
}



export const PUT_SMURF_START =     "PUT_SMURF_START";
export const PUT_SMURF_SUCCESS =   "PUT_SMURF_SUCCESS";
export const PUT_SMURF_FAILURE =   "PUT_SMURF_FAILURE";
export const putSmurf = smurf => dispatch => {
    
    dispatch({ type: PUT_SMURF_START });

    const id = smurf.id;
    axios
        .put(`http://localhost:3333/smurfs/${id}`, smurf)
        .then( res => {
            dispatch({ type: PUT_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: PUT_SMURF_FAILURE, payload: err }))
}



export const DELETE_SMURF_START =     "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS =   "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE =   "DELETE_SMURF_FAILURE";
export const deleteSmurf = id => dispatch => {
    
    dispatch({ type: DELETE_SMURF_START });

    axios
        .delete(`http://localhost:3333/smurfs/${id}`, id)
        .then( res => {
            dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }))
}