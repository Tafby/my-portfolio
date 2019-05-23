import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubAlt, faMediumM, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCode } from '@fortawesome/free-solid-svg-icons';

library.add(faGithubAlt, faUser, faCode, faLinkedinIn, faMediumM);

class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="nav-container">
					<div className="name-box">
						<h2 className="name">TIFFANY CARTER</h2>
						<div className="career-title">Full Stack Developer</div>
						<ul className="unstyled-list">
							<li>
								<Link title="Resume" to="/aboutme">
									<FontAwesomeIcon className="icons" size="3x" icon={[ 'fas', 'user' ]} />{' '}
								</Link>
								<p className="nav-title">Resume</p>
							</li>

							<li>
								<a title="Github" target="_blank" href="https://github.com/Tafby">
									<FontAwesomeIcon className="icons" size="3x" icon={[ 'fab', 'github-alt' ]} />
								</a>
								<p className="nav-title">Github</p>
							</li>

							<li>
								<a title="My Blog" target="_blank" href="https://medium.com/@tafby88">
									<FontAwesomeIcon className="icons" size="3x" icon={[ 'fab', 'medium-m' ]} />
								</a>
								<p className="nav-title">Blog</p>
							</li>

							<li>
								<a title="Linkedin" target="_blank" href="https://www.linkedin.com/in/tafby/">
									<FontAwesomeIcon
										style={{ color: 'white;' }}
										className="icons"
										size="3x"
										icon={[ 'fab', 'linkedin-in' ]}
									/>
								</a>
								<p className="nav-title">Linkedin</p>
							</li>

							<li>
								<Link title="Projects" to="/projects/">
									<FontAwesomeIcon className="icons p" size="3x" icon={[ 'fas', 'code' ]} />
								</Link>
								<p className="nav-title">Projects</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
