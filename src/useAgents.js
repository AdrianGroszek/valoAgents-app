import { useEffect, useState } from 'react';

export function useAgents() {
	const [agents, setAgents] = useState([]);

	useEffect(function () {
		async function fetchData() {
			try {
				const res = await fetch('https://valorant-api.com/v1/agents');
				const data = await res.json();
				setAgents(data.data);
			} catch (err) {
				console.error('Error fetching data:', err);
			}
		}
		fetchData();
	}, []);

	return { agents };
}
