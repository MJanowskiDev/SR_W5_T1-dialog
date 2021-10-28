import { styles } from './styles';
import { Link, useLocation } from 'react-router-dom';
const NavMenu = ({ open, onClose, navItems }) => {
	const pathname = useLocation().pathname;

	const handleOnClose = () => {
		onClose && onClose();
	};

	const getLinkStyle = (currentPath, linkPath) => {
		return currentPath === linkPath ? styles.linkActive : styles.link;
	};
	if (!open) return null;
	return (
		<div style={styles.container}>
			<div style={styles.buttonContainer}>
				<button style={styles.button} onClick={handleOnClose}>
					x
				</button>
			</div>

			<div style={styles.linksContainer}>
				{navItems.map((item) => (
					<Link style={getLinkStyle(pathname, item.to)} key={item.to} to={item.to}>
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
};

export default NavMenu;
