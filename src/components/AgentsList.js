import AgentItem from './AgentItem';

function AgentList({ agents, onSelectAgent }) {
	return (
		<ul className='agents-list'>
			{agents.map((agent) => (
				<AgentItem
					agent={agent}
					key={agent.uuid}
					onSelectAgent={onSelectAgent}
				/>
			))}
		</ul>
	);
}

export default AgentList;
