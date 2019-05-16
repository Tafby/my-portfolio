import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faMedium, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCode } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faUser, faMedium, faCode, faLinkedinIn);

class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="nav-container">
					<ul>
						<h2 className="name">Tiffany Carter</h2>
						<li>
							<Link title="Resume" to="/aboutme">
								<FontAwesomeIcon className="icons" size="6x" icon={[ 'fas', 'user' ]} />{' '}
							</Link>
						</li>

						<li>
							<a title="Github" target="_blank" href="https://github.com/Tafby">
								<FontAwesomeIcon className="icons" size="6x" icon={[ 'fab', 'github' ]} />
							</a>
						</li>

						<li>
							<a title="My Blog" target="_blank" href="https://medium.com/@tafby88">
								<FontAwesomeIcon className="icons" size="6x" icon={[ 'fab', 'medium' ]} />
							</a>
						</li>

						<li>
							<a title="My Blog" target="_blank" href="https://www.linkedin.com/in/tafby/">
								<FontAwesomeIcon className="icons" size="6x" icon={[ 'fab', 'linkedin-in' ]} />
							</a>
						</li>

						<li>
							<Link title="Projects" to="/projects/">
								<FontAwesomeIcon className="icons" size="6x" icon={[ 'fas', 'code' ]} />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Navbar;
