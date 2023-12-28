import Button from '../components/Button';

import CardsList from '../components/CardsList';

function Home() {
	return (
		<>
			<div className='hero-bg-box'>
				<div className='logo-icon-big'></div>
				<h2 className='logo-text'>ValoAgents</h2>
				<Button type={'btn-white'}>START</Button>
				<button className='down-arrow-btn'>
					<i class='fi fi-bs-chevron-double-down'></i>
				</button>
			</div>
			<div className='cards-box'>
				<CardsList />
				<Button type={'btn-red'}>START</Button>
			</div>
		</>
	);
}

export default Home;
