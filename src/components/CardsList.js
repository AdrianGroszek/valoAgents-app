import CardItem from './CardItem';
import logoImgOne from '../assets/img/card-img-1.png';
import logoImgTwo from '../assets/img/card-img-2.png';
import logoImgThree from '../assets/img/card-img-3.png';

const cardInfo = [
	{
		logoImg: logoImgOne,
		title: 'O ValoAgents',
		text: 'ValoAgent.pl to platforma stworzona specjalnie dla pasjonatów Valorant, gdzie zgłębisz tajniki postaci, odkryjesz skryte możliwości umiejętności, i podniesiesz swoją grę na wyższy poziom. Dzięki korzystaniu z oficjalnego API Valorant, ValoAgent.pl dostarcza najbardziej aktualne i precyzyjne informacje, które pozwolą Ci stać się prawdziwym agentem na polu walki.',
	},
	{
		logoImg: logoImgTwo,
		title: 'Szczegółowe Profile Postaci',
		text: 'Odkryj wszystko o ulubionych postaciach w Valorant! Na naszej stronie znajdziesz szczegółowe profile każdej postaci, zawierające informacje o ich historii, umiejętnościach i specjalnych zdolnościach. Dzięki naszym obszernym opisom dowiesz się, jak wykorzystać potencjał każdej postaci w najefektywniejszy sposób. Poznaj ich mocne strony i zastosuj unikalne taktyki, by zdobyć przewagę nad przeciwnikami!',
	},
	{
		logoImg: logoImgThree,
		title: 'Precyzyjne Opisy Umiejętności',
		text: 'Odwiedź nas, aby zgłębić tajniki umiejętności każdej postaci w Valorant. Nasze precyzyjne opisy umiejętności pozwalają poznać każdy aspekt zdolności bohaterów. Dowiedz się, jakie taktyki stosować, aby skutecznie wykorzystywać umiejętności taktyczne, zdolności specjalne i broń postaci. Niezależnie od tego, czy jesteś nowicjuszem czy doświadczonym graczem, nasza strona pomoże Ci odkryć pełen potencjał postaci i stać się mistrzem w świecie Valorant!',
	},
];

function CardsList() {
	return (
		<div className='cards-list'>
			{cardInfo.map((card) => (
				<CardItem image={card.logoImg} title={card.title} text={card.text} />
			))}
		</div>
	);
}

export default CardsList;
