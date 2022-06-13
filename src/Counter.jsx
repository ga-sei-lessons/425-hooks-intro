import { useState, useEffect } from 'react'

export default function Counter() {
	// useState gives us a state value and a function that sets the state value in an array
	// const [stateValue, functionToSetStateValue] = useState(initial state value)
	const [count, setCount] = useState(0)
	const [user, setUser] = useState({
		name: 'Weston',
		favFood: '🍕'
	})

	// useEffect inovkes a cb every render...
	useEffect(() => {
		// componentDidUpdate
		console.log('the component is rendering, and count is:', count)
		return () => {
			// this cb is invoked when the component is unmounted
			// rn, that is every render cycle
			console.log('i am unmounting....')
		}
	})

	// ...unless you pass it a state value (or props value) in the dependancy array...
	useEffect(() => {
		console.log('the user state has changed:', user)
		// return () => 
	}, [user]) // array of dependancies -- this useEffect will fire when something in this array changes

	// ... or if the dependancy array is empty
	useEffect(() => {
		// componentWillMount
		console.log('this is the the first time that the component is mounting')
	}, []) // empty dependancy array

	// const handleIncreaseCount = () => {
	// 	// no callbacks to use previous state -- benifit of useState
	// 	setCount(count + 1)
	// }

	// whatever is returned will be rendered
	return (
		<div>
			<h1>Hellloooo hooks 🪝</h1>

			<h2>The Count is: {count}</h2>	

			<button onClick={() => setCount(count + 1)}>+</button>	

			<h3>The current user is: {user.name}</h3>
			<h4>Their favFood is: {user.favFood}</h4>

			<form>
				<label htmlFor='name-input'>Name:</label>

				<input 
					type="text"
					placeholder='name...'
					id="name-input"
					value={user.name}
					// we have to handle merging old state with new state, when it comes to hooks
					onChange={e => setUser({ ...user, name: e.target.value })}
				/>
			</form>
		</div>
	)
}