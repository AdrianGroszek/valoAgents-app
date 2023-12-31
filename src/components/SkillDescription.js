function SkillDescription({ curAbility }) {
	return (
		<div className='skill-description-box'>
			<h3 className='skill-name'>{curAbility?.name}</h3>
			<p>{curAbility?.description}</p>
		</div>
	);
}

export default SkillDescription;
