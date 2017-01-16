import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

class App extends React.Component{
	render() {
		return (
			<div>
				<Sidebar/>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));