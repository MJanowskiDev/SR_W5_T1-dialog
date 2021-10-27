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
	useEffect(
		() => {
			const autoHideTimeout = setTimeout(() => handleOnClose(), autoHideDuration);
			return () => {
				clearTimeout(autoHideTimeout);
			};
		},
		[ open ]
	);

	const handleOnClose = () => {
		onClose && onClose();
	};

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
