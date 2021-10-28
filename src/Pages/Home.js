import { useState } from 'react';

import Button from '../components/Button';
import Dialog from '../components/Dialog';
import Snackbar from '../components/Snackbar';

const dialogContent =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const Home = () => {
	const [ openDefaultSnackbar, setOpenDefaultSnackbar ] = useState(false);
	const [ openSnackbar, setOpenSnackbar ] = useState(false);

	const [ open, setOpen ] = useState(false);

	const handleClickOpen = () => {
		setOpen(!open);
	};

	const handleDefaultSnackbarClose = () => {
		setOpenDefaultSnackbar(false);
	};

	const handleSnackbarClose = () => {
		setOpenSnackbar(false);
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
		<div>
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

			<div className='container'>
				<h1>Snackbar component</h1>
				<Button onClickHandle={() => setOpenDefaultSnackbar(true)}>Show default snackbar</Button>
				<Snackbar
					message={'This is default snackbar!'}
					open={openDefaultSnackbar}
					onClose={handleDefaultSnackbarClose}
				/>
				<Button onClickHandle={() => setOpenSnackbar(true)}>Show success snackbar</Button>
				<Snackbar
					message={'This is success snackbar!'}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					autoHideDuration={4000}
					open={openSnackbar}
					onClose={handleSnackbarClose}
					severity='success'
				/>
			</div>
		</div>
	);
};

export default Home;
