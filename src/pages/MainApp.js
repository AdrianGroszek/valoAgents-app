import LogoSmall from '../components/LogoSmall';
import AgentsListCard from '../components/AgentsListCard';

function MainApp() {
	return (
		<>
			<LogoSmall />
			<div className='wrapper'>
				<AgentsListCard />
				<div className='agent-info-card'>
					<h3 className='card-description text-red'>Nazwa agenta</h3>
					<div className='agent-role-header-box'>
						<span className='text-small text-grey'>rola</span>
						<span className='text-big text-grey'>Nazwa roli</span>
					</div>
					<ul className='skills-list'>
						<li className='skill-item'>
							<div className='temp-img'></div>
						</li>
						<li className='skill-item active-skill'>
							<div className='temp-img active-img'></div>
						</li>
						<li className='skill-item'>
							<div className='temp-img'></div>
						</li>
						<li className='skill-item'>
							<div className='temp-img'></div>
						</li>
					</ul>
					<div className='skill-description-box'>
						<h3 className='skill-name'>Wingman</h3>
						<p>
							EQUIP Wingman. FIRE to send Wingman forward seeking enemies.
							Wingman unleashes a concussive blast toward the first enemy he
							sees. ALT FIRE when targeting a Spike site or planted Spike to
							have Wingman defuse or plant the Spike. To plant, Gekko must have
							the Spike in his inventory. When Wingman expires he reverts into a
							dormant globule. INTERACT to reclaim the globule and gain another
							Wingman charge after a short cooldown.
						</p>
					</div>
				</div>
				<div className='agent-img-card'></div>
			</div>
		</>
	);
}

export default MainApp;
