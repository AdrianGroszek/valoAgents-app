function AgentItem({ agent, onSelectAgent }) {
	return (
		<li className={`agent-item`} onClick={() => onSelectAgent(agent)}>
			<img
				className='agent-profile-img-small'
				src={agent.killfeedPortrait}
				alt={`agent ${agent.displayName}`}
			/>
			<p className='agent-name'>{agent.displayName}</p>
		</li>
	);
}

export default AgentItem;
