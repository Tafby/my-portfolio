import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import mentormehomepage from '../images/mmhomepage.png';
import tetris1 from '../images/tetris1.png';
import tetris3 from '../images/tetris3.png';
import tetris2 from '../images/tetris2.png';
import guestbook from '../images/guestbook.png';
import traccoon from '../images/traccoon.png';

class Projects extends Component {
	render() {
		return (
			<div>
				<h2 style={{ textAlign: 'center' }}>My Projects</h2>
				<div className="project-wrapper">
					<div className="project a">
						<Link to="/tetris">
							<img className="img" src={tetris3} />
						</Link>
					</div>
					<div className="project b">
						<Link to="/traccoon">
							<img className="img" src={traccoon} />
						</Link>
					</div>
					<div className="project c">
						<Link to="/mentorme">
							<img className="img" src={mentormehomepage} />
						</Link>
					</div>
					<div className="project d">
						<Link to="/guestbook">
							<img className="img" src={guestbook} />
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
