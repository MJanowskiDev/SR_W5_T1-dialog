import React from 'react';
import CloseButton from '../CloseButton/CloseButton';
import { styles } from './styles';

const Dialog = ({ open, title, content, onClose, onAgree, onAbort }) => {
	const handleClose = () => {
		onClose && onClose();
	};
	const handleAbort = () => {
		handleClose();
		onAbort && onAbort();
	};
	const handleAgree = () => {
		handleClose();
		onAgree && onAgree();
	};
	if (!open) return null;
	return (
		<div style={styles.dialogBG}>
			<div style={styles.dialog}>
				<div style={styles.closeContainer}>
					<CloseButton onClick={handleClose} />
				</div>

				<h1 style={styles.dialogTitle}>{title}</h1>
				<div style={styles.dialogContent}>
					<p>{content}</p>
				</div>

				<div style={styles.actionButtonsDiv}>
					<button style={{ ...styles.actionButton, ...styles.buttonConfirm }} onClick={handleAgree}>
						Confirm
					</button>
					<button style={{ ...styles.actionButton, ...styles.buttonAbort }} onClick={handleAbort}>
						Abort
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
