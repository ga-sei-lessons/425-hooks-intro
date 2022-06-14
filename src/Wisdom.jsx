import {
	useState,
	useEffect
} from 'react'

export default function Wisdom() {
	// state to hold the API response
	const [wiseWords, setWiseWords] = useState('')
	// fetch the API data when the component mounts for the first time
	useEffect(() => { 
		// fetch data
		fetch('https://api.kanye.rest')
			.then(res => res.json())
			.then(wisdom => {
				// set it in state
				console.log(wisdom)
				setWiseWords(wisdom.quote)
			})
	}, []) // empty depndancy array means only run one time on initial component mount

	return (
		<div>
			<h2>Wise Words</h2>
	
			<p>{wiseWords}</p>
		</div>
	)
}