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
						<h3>Tetris</h3>
						<p>Remade tetris using React as the front end with a Rails API</p>
						<img className="img" src={tetris3} />
					</div>
					<div className="project b">
						<h3>Traccoon</h3>
						<p>A fun app to track raccoons in your neighborhood </p>
						<p>Ruby on Rails, CSS, and HMTL, Google Maps API.</p>
						<img className="img" src={traccoon} />
					</div>
					<div className="project c">
						<h3>MentorMe</h3>
						<p>
							This website allows you to find a mentor by viewing a list of people who have put themselves
							out there as a mentor. Request the mentorship from the mentor. Once it's accepted begin
							chatting and start goal setting!.
						</p>
						<p>React, Rails API</p>
						<img className="img" src={mentormehomepage} />
					</div>
					<div className="project d">
						<h3>GuestBook</h3>
						<p>An app where you can create, comment, and like memories from events you attended.</p>
						<p>Javascript, Rails API</p>
						<img className="img" src={guestbook} />
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
