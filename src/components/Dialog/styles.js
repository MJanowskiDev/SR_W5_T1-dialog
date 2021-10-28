export const styles = {
	dialog: {
		background: 'white',
		padding: '32px',
		paddingTop: '7px',
		borderRadius: '6px',
		maxWidth: '50%',
		zIndex: 10
	},
	dialogBG: {
		position: 'fixed',
		top: '0',
		left: '0',
		background: 'rgba(0, 0, 0, 0.336)',
		width: '100vw',
		height: '100vh',
		zIndex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	dialogTitle: { marginBlockStart: '3px', marginBlockEnd: '3px' },
	dialogContent: {
		textAlign: 'justify',
		overflowY: 'auto',
		maxHeight: '50%'
	},
	closeContainer: {
		position: 'relative',
		left: 'calc(100% - 30px )',
		top: '16px',
		background: 'none',
		border: 'none',
		fontSize: '18px',
		color: 'rgba(0, 0, 0, 0.7)'
	},
	actionButtonsDiv: {
		display: 'flex',
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: '16px'
	},
	actionButton: {
		width: '80px',
		padding: '6px',
		borderRadius: '6px',
		textTransform: 'uppercase',
		background: 'transparent'
	},
	buttonConfirm: { border: '1px solid green' },
	buttonAbort: { border: '1px solid red' }
};
