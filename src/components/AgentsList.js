import AgentItem from './AgentItem';

const fakeData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function AgentList() {
	return (
		<ul className='agents-list'>
			{fakeData.map((i) => (
				<AgentItem />
			))}
		</ul>
	);
}

export default AgentList;
