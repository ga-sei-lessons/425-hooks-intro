import {
	useState,
	useEffect
} from 'react'
import axios from 'axios'

export default function Github() {
	// state to hold api response and cotrolled form data
	const [repos, setRepos] = useState([])
	const [userName, setUserName] = useState('weston-bailey')
	// useEffect to get github repo information
	useEffect(() => {
		// IIFE immediately invoked function expression
		// the IIFE is to avoid putting async on the useEffect callback
		(async () => {
			try {
				const url = `http://api.github.com/users/${userName}/repos`
				const response = await axios.get(url)
				setRepos(response.data)
				console.log(response)
			} catch (err) {
				console.warn(err)
			}
		})()
		// console.log('?')
	}, [])	

	// IIFE example
	// (async function() { console.log('i am invoked immediately!') })()
	const repoLis = repos.map((repo, idx) => <li key={`repo${idx}`}>{repo.name}</li>)
	return (
		<div>
			<h1>Search the Github API</h1>
			<ol>
				{repoLis}
			</ol>
		</div>
	)
}