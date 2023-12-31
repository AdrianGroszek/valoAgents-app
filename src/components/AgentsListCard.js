import AgentsList from './AgentsList';

function AgentsListCard({ agents, onSelectAgent }) {
	return (
		<div className='agents-list-card'>
			<h3 className='card-description text-red'>Agenci</h3>
			<p className='agents-number-text text-grey'>
				Liczba agentów <span>{agents.length}</span>
			</p>
			<AgentsList agents={agents} onSelectAgent={onSelectAgent} />
		</div>
	);
}

export default AgentsListCard;
