import AgentRole from './AgentRole';
import SkillDescription from './SkillDescription';
import SkillsList from './SkillsList';
import AgentDescription from './AgentDescription';

function AgentInfoCard({
	curAgent,
	curAbility,
	onAbilityClick,
	isActive,
	onShowDescription,
	isDescription,
}) {
	return (
		<div className='agent-info-card'>
			<>
				<AgentRole curAgent={curAgent} />
				{curAgent.name ? (
					<>
						{isDescription ? (
							<AgentDescription curAgent={curAgent} />
						) : (
							<>
								<SkillsList
									curAgent={curAgent}
									onAbilityClick={onAbilityClick}
									isActive={isActive}
								/>
								<SkillDescription curAbility={curAbility} />
							</>
						)}
						<button className='desc-btn' onClick={onShowDescription}>
							{isDescription ? '-' : '+'}
						</button>
					</>
				) : (
					<h2 className='choose-agent-big'>Wybierz Agenta</h2>
				)}
			</>
		</div>
	);
}

export default AgentInfoCard;
