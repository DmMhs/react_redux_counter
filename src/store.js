import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const logger = createLogger({
	collapsed: (getState, action, logEntry) => !logEntry.error
});

const middleWare = applyMiddleware(logger);

const store = createStore(
	reducers,
	compose(middleWare, window.devToolsExtension ? window.devToolsExtension(): f => f)
);

export default store;