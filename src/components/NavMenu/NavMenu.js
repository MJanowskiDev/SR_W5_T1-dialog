import { styles } from './styles';
const NavMenu = ({ open, onClose }) => {
	const handleOnClose = () => {
		onClose && onClose();
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
				<a>Home</a>
				<a>About</a>
				<a>Contanct</a>
			</div>
		</div>
	);
};

export default NavMenu;
