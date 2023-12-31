import { useEffect, useState } from 'react';

const API_URL = 'https://valorant-api.com/v1/agents';
const LANG = 'pl-PL';

export function useAgents() {
	const [agents, setAgents] = useState([]);

	useEffect(function () {
		async function fetchData() {
			try {
				const res = await fetch(`${API_URL}?lang=${LANG}`);
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
