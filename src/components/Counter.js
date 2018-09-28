import React from 'react';
import './Counter.css';

export const Counter = (props) => (
	<div>
		<span className="count">{props.Counter.count}</span>
		<br/>
		<button className="btn" onClick={() => props.increment()}>Increment</button>
		<button className="btn" onClick={() => props.decrement()}>Decrement</button>
		<br/>
		<input id="set-num" min="0" type="number" onChange={() => props.setValue()}/>
	</div>
);