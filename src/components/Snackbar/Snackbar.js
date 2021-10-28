import { useEffect, useCallback } from 'react';
import { styles, getStyleByAnchor, getSeverityStyle } from './styles';

import CloseButton from '../CloseButton/CloseButton';

const Snackbar = ({
	open,
	message,
	autoHideDuration = 5000,
	onClose,
	anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
	severity
}) => {
	const handleOnClose = useCallback(
		() => {
			onClose && onClose();
		},
		[ onClose ]
	);

	useEffect(
		() => {
			const autoHideTimeout = setTimeout(() => handleOnClose(), autoHideDuration);
			return () => {
				clearTimeout(autoHideTimeout);
			};
		},
		[ open, autoHideDuration, handleOnClose ]
	);

	if (!open) return null;

	return (
		<div style={{ ...styles.snackbar, ...getStyleByAnchor(anchorOrigin), ...getSeverityStyle(severity) }}>
			<div>{message}</div>
			<CloseButton style={{ ...getSeverityStyle(severity), border: 'unset' }} onClick={handleOnClose} />
		</div>
	);
};

export default Snackbar;
