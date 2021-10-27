import { useEffect } from 'react';
import { styles, getStyleByAnchor, getSeverityStyle } from './styles';

const Snackbar = ({
	open,
	message,
	autoHideDuration = 5000,
	onClose,
	anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
	severity
}) => {
	const handleOnClose = () => {
		onClose && onClose();
	};

	useEffect(
		() => {
			const autoHideTimeout = setTimeout(() => handleOnClose(), autoHideDuration);
			return () => {
				clearTimeout(autoHideTimeout);
			};
		},
		[ open ]
	);

	if (!open) return null;

	return (
		<div style={{ ...styles.snackbar, ...getStyleByAnchor(anchorOrigin), ...getSeverityStyle(severity) }}>
			<div>{message}</div>

			<button style={{ ...getSeverityStyle(severity), ...styles.button }} onClick={handleOnClose}>
				x
			</button>
		</div>
	);
};

export default Snackbar;
