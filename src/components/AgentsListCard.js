import AgentsList from './AgentsList';

function AgentsListCard() {
	return (
		<div className='agents-list-card'>
			<h3 className='card-description text-red'>Agenci</h3>
			<p className='agents-number-text text-grey'>
				Liczba agentów <span>23</span>
			</p>
			<AgentsList />
		</div>
	);
}

export default AgentsListCard;
