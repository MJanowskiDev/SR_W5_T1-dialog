import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, About, Contact } from './Pages';
import { NavMenu, Button } from './components';

import './App.css';

const navItems = [ { to: '/', title: 'Home' }, { to: '/contact', title: 'Contact' }, { to: '/about', title: 'About' } ];

function App() {
	const [ openNavMenu, setOpenNavMenu ] = useState(false);

	const handleNavMenuClose = () => {
		setOpenNavMenu(false);
	};
	return (
		<Router>
			<div className='App'>
				<nav>
					<p>NavMenu component</p>
					<Button onClickHandle={() => setOpenNavMenu(!openNavMenu)}>
						{openNavMenu ? 'Close NavMenu' : 'Open NavMenu'}
					</Button>
				</nav>
				<div className='content'>
					<NavMenu open={openNavMenu} onClose={handleNavMenuClose} navItems={navItems} />

					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/about'>
							<About />
						</Route>
						<Route exact path='/contact'>
							<Contact />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
