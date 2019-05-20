import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Route path="/" exact component={Home} />
					<Route path="/aboutme/" exact component={AboutMe} />
					<Route path="/projects/" exact component={Projects} />
				</Router>
			</div>
		);
	}
}

export default App;
