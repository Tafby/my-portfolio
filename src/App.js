import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
	render() {
		return (
			<div>
				<h1 className="links">Tiffany Carter</h1>
				<Router>
					<div>
						<nav>
							<ul className="links">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<div>
										{/* <i className="fab fa-github" /> */}
										<FontAwesomeIcon icon={[ 'google' ]} />
									</div>
									<Link to="/aboutme">About Me</Link>
								</li>
								<li>
									<a target="_blank" href="https://github.com/Tafby">
										Github
									</a>
								</li>
								<li>
									<a target="_blank" href="https://medium.com/@tafby88">
										Blog
									</a>
								</li>
								<li>
									<Link to="/projects/">Projects</Link>
								</li>
							</ul>
						</nav>

						{/* <Route path="/" exact component={App} /> */}
						<Route path="/aboutme/" component={AboutMe} />
						<Route path="/projects/" component={Projects} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
