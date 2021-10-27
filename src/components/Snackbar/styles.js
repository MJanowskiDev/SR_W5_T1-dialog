const palette = {
	error: 'rgb(211, 47, 47)',
	warning: 'rgb(245, 124, 0)',
	info: 'rgb(2, 136, 209)',
	success: 'rgb(56, 142, 60)'
};

const textColor = 'white';

const horizontalLeft = { left: 0 };
const horizontalCenter = { left: '50%', transform: 'translateX(-50%)' };
const horizontalRight = { right: 0 };

const verticalTop = { top: 0 };
const verticalBottom = { bottom: 0 };

const error = { border: `1px solid ${palette.error}`, color: textColor, background: palette.error };
const warning = { border: `1px solid ${palette.warning}`, color: textColor, background: palette.warning };
const info = { border: `1px solid ${palette.info}`, color: textColor, background: palette.info };
const success = { border: `1px solid ${palette.success}`, color: textColor, background: palette.success };
const initial = { border: '1px solid black', color: 'black', background: 'white' };

const getStyleVertical = (key) => {
	switch (key) {
		case 'top':
			return verticalTop;
		case 'bottom':
			return verticalBottom;
		default:
			return verticalBottom;
	}
};

const getStyleHorizontal = (key) => {
	switch (key) {
		case 'left':
			return horizontalLeft;
		case 'center':
			return horizontalCenter;
		case 'right':
			return horizontalRight;
		default:
			return horizontalLeft;
	}
};

export const getStyleByAnchor = (anchorOrigin) => {
	const styleVertical = getStyleVertical(anchorOrigin.vertical);
	const styleHorizontal = getStyleHorizontal(anchorOrigin.horizontal);

	return { ...styleVertical, ...styleHorizontal };
};

export const getSeverityStyle = (key) => {
	switch (key) {
		case 'error':
			return error;
		case 'info':
			return info;
		case 'success':
			return success;
		case 'warning':
			return warning;
		default:
			return initial;
	}
};
export const styles = {
	snackbar: {
		padding: 10,
		border: '1px solid black',
		backgroundColor: 'white',
		borderRadius: 6,
		minWidth: 300,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'absolute',
		margin: '10',
		fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
		fontWeight: 500,
		letterSpacing: 1,
		zIndex: 100,
		margin: 10
	},

	button: {
		background: 'none',
		border: 'unset',
		fontSize: 18
	}
};
