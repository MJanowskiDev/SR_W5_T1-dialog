const styles = {
	background: 'white',
	padding: 10,
	margin: 10,
	letterSpacing: 1,
	borderRadius: 6
};

const Button = ({ onClickHandle, children }) => {
	const onClick = (e) => {
		onClickHandle && onClickHandle(e);
	};
	return (
		<button style={styles} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
