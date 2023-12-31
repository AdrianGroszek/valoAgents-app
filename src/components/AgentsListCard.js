import AgentsList from './AgentsList';

function AgentsListCard({ agents, onSelectAgent, activeAgent }) {
	return (
		<div className='agents-list-card'>
			<h3 className='card-description text-red'>Agenci</h3>
			<p className='agents-number-text text-grey'>
				Liczba agentów <span>{agents.length}</span>
			</p>
			<AgentsList
				agents={agents}
				onSelectAgent={onSelectAgent}
				activeAgent={activeAgent}
			/>
		</div>
	);
}

export default AgentsListCard;
