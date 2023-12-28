import { Link } from 'react-router-dom';

function Button({ type, children }) {
	return (
		<Link to='/MainApp' className={`btn ${type}`}>
			{children}
		</Link>
	);
}

export default Button;
