import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const SUCCESFUL_FETCH = 'SUCCESFUL_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_ERROR = 'ADD_ERROR';


export const fetchSmurfs = () => dispatch => {
    dispatch({type:START_FETCH})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res =>
      dispatch({ type: SUCCESFUL_FETCH, payload: res.data })
    )
    .catch(err => dispatch({ type: FAILED_FETCH, payload: err }));
}
export function addSmurf(newSmurf) {
    return {type:ADDING_SMURF, payload: newSmurf}
}
export function setError(error) {
    return {type:ADD_ERROR, payload: error}
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.