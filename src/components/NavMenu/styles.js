export const styles = {
	container: {
		width: 150,
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		padding: 16,
		background: 'rgb(18, 18, 18)',
		backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))',
		zIndex: 500
	},
	buttonContainer: {
		position: 'relative',
		left: 'calc(100% - 16px)',
		top: 0
	},
	button: {
		border: 'unset',
		fontSize: 18,
		background: 'transparent',
		color: 'white'
	},
	linksContainer: {
		margin: '16px 32px',
		display: 'flex',
		flexDirection: 'column',
		gap: 16,
		color: 'white'
	}
};
