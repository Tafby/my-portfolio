import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Tetris from './components/Tetris';
import Traccoon from './components/Traccoon';
import MentorMe from './components/MentorMe';
import Guestbook from './components/Guestbook';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Route path="/" exact component={Home} />
					<Route path="/aboutme/" exact component={AboutMe} />
					<Route path="/projects/" exact component={Projects} />
					<Route path="/tetris/" exact component={Tetris} />
					<Route path="/traccoon/" exact component={Traccoon} />
					<Route path="/mentorme/" exact component={MentorMe} />
					<Route path="/guestbook/" exact component={Guestbook} />
				</Router>
			</div>
		);
	}
}

export default App;
