function SkillItem({ onAbilityClick, ability, isActive }) {
	console.log(isActive);
	console.log(ability);
	return (
		<li
			className={`skill-item ${isActive ? 'active-img' : ''}`}
			onClick={() => onAbilityClick(ability)}>
			<img className='temp-img' src={ability.displayIcon} alt='ability' />
		</li>
	);
}

export default SkillItem;
