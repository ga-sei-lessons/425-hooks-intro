import {
	useEffect,
	useState
} from 'react'

export default function Timer() {
	// state that keeps track of the current count
	const [time, setTime] = useState(0)
	const [value, setValue] = useState('')
	// keep track of currently pressed key
	const [pressedKey, setPressedKey] = useState('')

	useEffect(() => {
		// when the component mounts, start listening for key presses
		const keyDownHandler = e => setPressedKey(e.key)
		document.addEventListener('keydown', keyDownHandler)
		// if you put something on the document or window -- CLEAN IT UP
		return () => {
			document.removeEventListener('keydown', keyDownHandler)
		}
	}, [])
 
	// create the interval when the component mounts
	useEffect(() => {
		const interval = setInterval(() => {
			// this line triggers a re-render
			// and the return call
			setTime(time + 1)
		}, 500)

		return () => {
			// runs when the component unmounts from a state change in the dependancy array
			// console.log('time has changed, so I am unmounting')
			// 'clean up' side effects
			clearInterval(interval)
			// if you are using the document
			// or the window
			// browser APIs
		}
	}, [time]) // only run when the 'time' state changes

	return (
		<div>
			<h3>The time is: {time}</h3>
			<h3>The currently pressed key is: {pressedKey}</h3>

			<input 
				value={value}
				onChange={e => setValue(e.target.value)}
				type='text'
				placeholder='enter some text, i do nothing...'
			/>
		</div>
	)
}