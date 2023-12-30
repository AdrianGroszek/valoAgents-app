function CardItem({ image, title, text }) {
	return (
		<div className='card-item'>
			<img src={image} alt='valoagents logo' className='card-item-img' />
			<h3 className='card-item-header'>{title}</h3>
			<p className='card-item-text'>{text}</p>
		</div>
	);
}

export default CardItem;
