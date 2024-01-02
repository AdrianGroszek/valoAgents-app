import { Link } from 'react-router-dom';

import LogoSmall from '../components/LogoSmall';
import AgentsListCard from '../components/AgentsListCard';
import AgentInfoCard from '../components/AgentInfoCard';
import { useAgents } from '../useAgents';
import { useEffect, useState } from 'react';

function MainApp() {
	const [curAgent, setCurAgent] = useState({});
	const [curAbility, setCurAbility] = useState({});
	const [isActive, setIsActive] = useState(null);
	const [activeAgent, setActiveAgent] = useState(null);
	const [isDescription, setIsDescription] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);

	const { agents } = useAgents();

	function handleShowDescription() {
		setIsDescription(!isDescription);
	}

	// console.log(agents);

	function handleAbilityClick(ability) {
		setCurAbility({
			name: ability.displayName,
			description: ability.description,
			icon: ability.displayIcon,
		});
		setIsActive(ability);
	}

	function handleAgentClick(agent) {
		if (agent.displayName === curAgent.name) return;
		// console.log(agent.abilities[0]);
		// console.log(curAbility);
		// console.log(isActive);

		setCurAgent({
			id: agent?.uuid,
			name: agent?.displayName,
			role: agent?.role?.displayName,
			description: agent?.description,
			abilities: agent?.abilities,
			image: agent?.fullPortrait,
			roleImage: agent?.role?.displayIcon,
			background: agent?.background,
			roleDescription: agent?.role?.description,
		});
		setActiveAgent(agent);
		handleAbilityClick(agent.abilities[0]);
		setIsDescription(false);
		setIsAnimated(!isAnimated);
	}

	return (
		<>
			<Link to='/'>
				<LogoSmall />
			</Link>
			<div className='wrapper'>
				<AgentsListCard
					agents={agents}
					onSelectAgent={handleAgentClick}
					activeAgent={activeAgent}
				/>
				<AgentInfoCard
					curAgent={curAgent}
					curAbility={curAbility}
					onAbilityClick={handleAbilityClick}
					isActive={isActive}
					onShowDescription={handleShowDescription}
					isDescription={isDescription}
				/>
				<div className={`agent-img-card ${activeAgent ? 'card-red' : ''}`}>
					{curAgent.image ? (
						<>
							<img
								src={curAgent.background}
								alt='agent background'
								className={`agent-background-img ${
									isAnimated ? 'animation-one' : ''
								}`}
							/>
							<img
								src={curAgent.image}
								alt='agent'
								className={`agent-img ${isAnimated ? 'animation-two' : ''}`}
							/>
						</>
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
}

export default MainApp;
