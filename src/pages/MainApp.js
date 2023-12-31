import LogoSmall from '../components/LogoSmall';
import AgentsListCard from '../components/AgentsListCard';
import AgentInfoCard from '../components/AgentInfoCard';
import { useAgents } from '../useAgents';
import { useState } from 'react';

function MainApp() {
	const { agents } = useAgents();
	const [curAgent, setCurAgent] = useState({});
	const [curAbility, setCurAbility] = useState({});
	const [isActive, setIsActive] = useState(false);
	// console.log(curAgent);

	function handleAbilityClick(ability) {
		setCurAbility({
			name: ability.displayName,
			description: ability.description,
			icon: ability.displayIcon,
		});
		setIsActive(ability);
	}

	function handleAgentClick(agent) {
		// Tworzenie nowego obiektu po kliknięciu
		setCurAgent({
			name: agent?.displayName,
			role: agent?.role?.displayName,
			description: agent?.description,
			abilities: agent?.abilities,
			image: agent?.fullPortrait,
		});

		if (agent.displayName !== curAgent.name) {
			setCurAbility({});
			setIsActive(false);
		}
	}

	return (
		<>
			<LogoSmall />
			<div className='wrapper'>
				<AgentsListCard agents={agents} onSelectAgent={handleAgentClick} />
				<AgentInfoCard
					curAgent={curAgent}
					curAbility={curAbility}
					onAbilityClick={handleAbilityClick}
					isActive={isActive}
				/>
				<div className='agent-img-card'>
					{curAgent.image ? <img src={curAgent.image} alt='agent' /> : ''}
				</div>
			</div>

			{/* <div>
				<h1>Lista Agentów Valorant</h1>
				<ul>
					{agents.map((agent) => (
						<li key={agent.uuid} onClick={() => handleAgentClick(agent)}>
							{agent.displayName}
						</li>
					))}
				</ul>

				{curAgent && (
					<div>
						<h2>Wybrany Agent:</h2>
						<p>
							<strong>Imię:</strong> {curAgent.name}
						</p>
						<p>
							<strong>Rola:</strong> {curAgent.role}
						</p>
						<p>
							<strong>Opis:</strong> {curAgent.description}
						</p>
					</div>
				)}
			</div> */}
		</>
	);
}

export default MainApp;
