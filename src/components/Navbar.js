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
					<h2 className="name">Tiffany Carter</h2>
					<ul className="unstyled-list">
						<li>
							<Link title="Resume" to="/aboutme">
								<FontAwesomeIcon className="icons" size="4x" icon={[ 'fas', 'user' ]} />{' '}
							</Link>
							<p>Resume</p>
						</li>

						<li>
							<a title="Github" target="_blank" href="https://github.com/Tafby">
								<FontAwesomeIcon className="icons" size="4x" icon={[ 'fab', 'github' ]} />
							</a>
							<p>Github</p>
						</li>

						<li>
							<a title="My Blog" target="_blank" href="https://medium.com/@tafby88">
								<FontAwesomeIcon className="icons" size="4x" icon={[ 'fab', 'medium' ]} />
							</a>
							<p>Blog</p>
						</li>

						<li>
							<a title="Linkedin" target="_blank" href="https://www.linkedin.com/in/tafby/">
								<FontAwesomeIcon className="icons" size="4x" icon={[ 'fab', 'linkedin-in' ]} />
							</a>
							<p>Linkedin</p>
						</li>

						<li>
							<Link title="Projects" to="/projects/">
								<FontAwesomeIcon className="icons" size="4x" icon={[ 'fas', 'code' ]} />
							</Link>
							<p>Projects</p>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Navbar;
