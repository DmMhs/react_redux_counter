import { INCREMENT, DECREMENT, SETVALUE } from '../actions';

const initialState = {
	count: 0
};

export default (state = initialState, action ) => {
switch(action.type) {
	case INCREMENT:
		return { ...state, count: +state.count + 1};
	case DECREMENT:
		return {...state, count: state.count - 1};
	case SETVALUE: 
		return {...state, count: document.getElementById("set-num").value};
	default:
		return state;
}	
};