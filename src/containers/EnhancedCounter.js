import { connect } from 'react-redux';
import { Counter } from '../components/Counter';
import { INCREMENT, DECREMENT, SETVALUE} from '../actions';

const mapDispatchToProps = (dispatch) => {
	return({
		increment() {
			dispatch({type: INCREMENT});
		},
		decrement() {
			dispatch({type: DECREMENT});
		},
		setValue() {
			dispatch({type: SETVALUE});
		}
	});
};

const mapStateToProps = (state) => {
	return {
		Counter: state.Counter
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);