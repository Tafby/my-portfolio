import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Gallery from 'react-grid-gallery';

const TETRISIMAGES = [
	{
		src: '/images/tetris3.png',
		thumbnail: '/images/tetris3.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Tetris'
	},
	{
		src: '/images/tetris4.png',
		thumbnail: '/images/tetris4.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'List of Scores'
	},
	{
		src: '/images/tetris5.png',
		thumbnail: '/images/tetris5.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Post your score'
	}
];
const TRACCOONIMAGES = [
	{
		src: '/images/traccoon.png',
		thumbnail: '/images/traccoon.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Traccoon Home Page'
	},
	{
		src: '/images/traccoon2.png',
		thumbnail: '/images/traccoon2.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Traccoon My Neighborhood Sightings'
	},

	{
		src: '/images/traccoon4.png',
		thumbnail: '/images/traccoon4.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Traccoon Report a Sighting'
	},
	{
		src: '/images/traccoons.png',
		thumbnail: '/images/traccoons.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'See all reported Raccoons'
	},
	{
		src: '/images/traccoon1.png',
		thumbnail: '/images/traccoon1.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Traccoon Login Page'
	}
];
const MENTORIMAGES = [
	{
		src: '/images/mmhomepage.png',
		thumbnail: '/images/mmhomepage.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'MentorMe Home Page'
	},
	{
		src: '/images/mm1.png',
		thumbnail: '/images/mm1.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'My Profile'
	},
	{
		src: '/images/mm2.png',
		thumbnail: '/images/mm2.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Chat'
	},
	{
		src: '/images/mm3.png',
		thumbnail: '/images/mm3.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Search Mentors'
	}
];
const GBIMAGES = [
	{
		src: '/images/guestbook.png',
		thumbnail: '/images/guestbook.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Guestbook Home Page'
	},
	{
		src: '/images/gb2.png',
		thumbnail: '/images/gb2.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Memory page, post a comment or like'
	},
	{
		src: '/images/gb3.png',
		thumbnail: '/images/gb3.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Create a memory'
	},
	{
		src: '/images/gb4.png',
		thumbnail: '/images/gb4.png',
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: false,
		caption: 'Memory Page, post a comment or like'
	}
];
class Projects extends Component {
	render() {
		return (
			<div>
				<h2 style={{ textAlign: 'center' }}>My Projects</h2>
				<div className="project-wrapper">
					<div className="project a">
						<h3>Tetris</h3>
						<p>Remade tetris using React as the front end with a Rails API</p>

						<div
							style={{
								display: 'block',
								border: '1px solid #ddd',
								overflow: 'auto'
							}}
						>
							{' '}
							<Gallery images={TETRISIMAGES} />
						</div>
					</div>
					<div className="project b">
						<h3>Traccoon</h3>
						<p>A fun app to track raccoons in your neighborhood </p>
						<p>Ruby on Rails, CSS, and HMTL, Google Maps API.</p>
						<div
							style={{
								display: 'block',
								border: '1px solid #ddd',
								overflow: 'auto'
							}}
						>
							{' '}
							<Gallery images={TRACCOONIMAGES} />
						</div>
					</div>
					<div className="project c">
						<h3>MentorMe</h3>
						<p>
							This website allows you to find a mentor by viewing a list of people who have put themselves
							out there as a mentor. Request the mentorship from the mentor. Once it's accepted begin
							chatting and start goal setting!.
						</p>
						<p>React, Rails API</p>
						<div
							style={{
								display: 'block',
								border: '1px solid #ddd',
								overflow: 'auto'
							}}
						>
							{' '}
							<Gallery images={MENTORIMAGES} />
						</div>
					</div>
					<div className="project d">
						<h3>GuestBook</h3>
						<p>An app where you can create, comment, and like memories from events you attended.</p>
						<p>Javascript, Rails API</p>
						<div
							style={{
								display: 'block',
								width: '50px;',
								border: '1px solid #ddd',
								overflow: 'auto'
							}}
						>
							{' '}
							<Gallery images={GBIMAGES} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
