function AgentRole({ curAgent }) {
	return (
		<>
			<h3 className='card-description text-red'>
				{curAgent.name ? curAgent.name : 'Nazwa Agenta'}
			</h3>
			<div className='agent-role-header-box'>
				<span className='text-small text-grey'>rola</span>
				<span className='text-big text-grey'>{curAgent.role}</span>
			</div>
		</>
	);
}

export default AgentRole;
