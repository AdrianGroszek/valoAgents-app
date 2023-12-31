import AgentItem from './AgentItem';

function AgentList({ agents, onSelectAgent, activeAgent }) {
	return (
		<ul className='agents-list'>
			{agents.map((agent) => (
				<AgentItem
					agent={agent}
					key={agent.uuid}
					onSelectAgent={onSelectAgent}
					activeAgent={activeAgent === agent}
				/>
			))}
		</ul>
	);
}

export default AgentList;
