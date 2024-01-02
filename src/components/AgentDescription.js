function AgentDescription({ curAgent }) {
	return (
		<div className='agent-description-box'>
			<h3 className='agent-description-header'>Opis Agenta</h3>
			<p>{curAgent?.description}</p>
			<h3 className='agent-description-header'>Opis Roli</h3>
			<p>{curAgent?.roleDescription}</p>
		</div>
	);
}

export default AgentDescription;
