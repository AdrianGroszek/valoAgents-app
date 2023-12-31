import SkillItem from './SkillItem';

function SkillsList({ onAbilityClick, curAgent, isActive }) {
	return (
		<ul className='skills-list'>
			{curAgent?.abilities?.map((ability, index) => (
				<SkillItem
					onAbilityClick={onAbilityClick}
					ability={ability}
					key={index}
					isActive={isActive === ability}
				/>
			))}
		</ul>
	);
}

export default SkillsList;
