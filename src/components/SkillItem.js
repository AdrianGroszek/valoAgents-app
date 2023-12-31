function SkillItem({ onAbilityClick, ability, isActive }) {
	return (
		<li
			className={`skill-item ${isActive ? 'active-img' : ''}`}
			onClick={() => onAbilityClick(ability)}>
			<img className='temp-img' src={ability.displayIcon} alt='ability' />
		</li>
	);
}

export default SkillItem;
