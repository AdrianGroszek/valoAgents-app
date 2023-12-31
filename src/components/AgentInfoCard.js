import AgentRole from './AgentRole';
import SkillDescription from './SkillDescription';
import SkillsList from './SkillsList';

function AgentInfoCard({ curAgent, curAbility, onAbilityClick, isActive }) {
	return (
		<div className='agent-info-card'>
			<>
				<AgentRole curAgent={curAgent} />
				{curAgent.name ? (
					<>
						<SkillsList
							curAgent={curAgent}
							onAbilityClick={onAbilityClick}
							isActive={isActive}
						/>
						<SkillDescription curAbility={curAbility} />
					</>
				) : (
					<h2 className='choose-agent-big'>Szukaj Agenta</h2>
				)}
			</>
		</div>
	);
}

export default AgentInfoCard;
