import { Link } from 'react-router-dom';

import LogoSmall from '../components/LogoSmall';
import AgentsListCard from '../components/AgentsListCard';
import AgentInfoCard from '../components/AgentInfoCard';
import { useAgents } from '../useAgents';
import { useState } from 'react';

function MainApp() {
	const { agents } = useAgents();
	const [curAgent, setCurAgent] = useState({});
	const [curAbility, setCurAbility] = useState({});
	const [isActive, setIsActive] = useState(null);
	const [activeAgent, setActiveAgent] = useState(null);

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

		setCurAgent({
			name: agent?.displayName,
			role: agent?.role?.displayName,
			description: agent?.description,
			abilities: agent?.abilities,
			image: agent?.fullPortrait,
			background: agent?.background,
		});
		setActiveAgent(agent);

		if (agent.displayName !== curAgent.name) {
			setCurAbility({});
			setIsActive(false);
		}
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
				/>
				<div className={`agent-img-card ${activeAgent ? 'card-red' : ''}`}>
					{curAgent.image ? (
						<>
							<img
								src={curAgent.background}
								alt='agent background'
								className='agent-background-img'
							/>
							<img src={curAgent.image} alt='agent' />
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
