import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Dialog from './components/Dialog';

const dialogContent =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

function App() {
	const [ open, setOpen ] = useState(false);
	const handleClickOpen = () => {
		setOpen(!open);
	};

	const onCloseHandle = () => {
		setOpen(false);
	};

	const onAgreeHandle = () => {
		console.log('Dialog action: AGREE');
	};

	const onAbortHandle = () => {
		console.log('Dialog action: ABORT');
	};
	return (
		<div className='App'>
			<div className='container'>
				<h1>Card component</h1>
				<Button onClickHandle={handleClickOpen}>Open dialog</Button>
				<Dialog
					title='This is card component'
					content={dialogContent}
					open={open}
					onClose={onCloseHandle}
					onAgree={onAgreeHandle}
					onAbort={onAbortHandle}
				/>
			</div>
		</div>
	);
}

export default App;
