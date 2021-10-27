import React from 'react';
import classes from './Dialog.module.css';

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
		<div className={classes.dialogBG}>
			<div className={classes.dialog}>
				<button className={classes.dialogCloseBtn} onClick={handleClose}>
					X
				</button>
				<h1 className={classes.dialogTitle}>{title}</h1>
				<div className={classes.dialogContent}>
					<p>{content}</p>
				</div>

				<div className={classes.actionButtonsDiv}>
					<button className={`${classes.actionButton} ${classes.buttonConfirm}`} onClick={handleAgree}>
						Confirm
					</button>
					<button className={`${classes.actionButton} ${classes.buttonAbort}`} onClick={handleAbort}>
						Abort
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dialog;
