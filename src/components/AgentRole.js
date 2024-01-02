function AgentRole({ curAgent }) {
	return (
		<>
			<h3 className='card-description text-red'>
				{curAgent.name ? curAgent.name : 'Nazwa Agenta'}
			</h3>
			<div className='agent-role-header-box'>
				{curAgent.role ? (
					<img
						src={curAgent?.roleImage}
						className='role-icon color-grey'
						alt='role icon'
					/>
				) : (
					<div className='fake-role-icon'></div>
				)}
				<div className='agent-role-text-wrapper'>
					<span className='text-small text-grey'>rola</span>
					<span className='text-big text-grey'>
						{curAgent.role ? curAgent.role : 'NAZWA ROLI'}
					</span>
				</div>
			</div>
		</>
	);
}

export default AgentRole;
