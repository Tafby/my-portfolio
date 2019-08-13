import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Gallery from 'react-grid-gallery';
const thumbnailWidth = 100;
const TETRISIMAGES = [
	{
		src: '/images/tetris3.png',
		thumbnail: '/images/tetris3.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'Tetris'
	},
	{
		src: '/images/tetris2.png',
		thumbnail: '/images/tetris2.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'List of Scores'
	},
	{
		src: '/images/tetris6.png',
		thumbnail: '/images/tetris6.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'List of Scores'
	}
];
const TRACCOONIMAGES = [
	{
		src: '/images/traccoon.png',
		thumbnail: '/images/traccoon.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'Traccoon Home Page'
	},
	{
		src: '/images/traccoon2.png',
		thumbnail: '/images/traccoon2.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'Traccoon My Neighborhood Sightings'
	},

	{
		src: '/images/traccoon4.png',
		thumbnail: '/images/traccoon4.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'Traccoon Report a Sighting'
	},
	{
		src: '/images/traccoons.png',
		thumbnail: '/images/traccoons.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'See all reported Raccoons'
	},
	{
		src: '/images/traccoon1.png',
		thumbnail: '/images/traccoon1.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'Traccoon Login Page'
	}
];
const MENTORIMAGES = [
	{
		src: '/images/mmhomepage.png',
		thumbnail: '/images/mmhomepage.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'MentorMe Home Page'
	},
	{
		src: '/images/mm1.png',
		thumbnail: '/images/mm1.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'My Profile'
	},
	{
		src: '/images/mm2.png',
		thumbnail: '/images/mm2.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'Chat'
	},
	{
		src: '/images/mm3.png',
		thumbnail: '/images/mm3.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'Search Mentors'
	}
];
const GBIMAGES = [
	{
		src: '/images/guestbook.png',
		thumbnail: '/images/guestbook.png',
		thumbnailWidth: thumbnailWidth,
		isSelected: false,
		caption: 'Guestbook Home Page'
	},
	{
		src: '/images/gb2.png',
		thumbnail: '/images/gb2.png',
		thumbnailWidth: thumbnailWidth,
		isSelected: false,
		caption: 'Memory page, post a comment or like'
	},
	{
		src: '/images/gb3.png',
		thumbnail: '/images/gb3.png',
		thumbnailWidth: thumbnailWidth,
		isSelected: false,
		caption: 'Create a memory'
	},
	{
		src: '/images/gb4.png',
		thumbnail: '/images/gb4.png',
		thumbnailWidth: thumbnailWidth,

		isSelected: false,
		caption: 'Memory Page, post a comment or like'
	}
];
const SNAKEIMAGES = [
	{
		src: '/images/snake1.png',
		thumbnail: '/images/snake1.png',
		thumbnailWidth: thumbnailWidth,
		isSelected: false,
		caption: 'Snake Game'
	},
	{
		src: '/images/snake2.png',
		thumbnail: '/images/snake2.png',
		thumbnailWidth: thumbnailWidth,
		isSelected: false,
		caption: 'Snake Game'
	},
	{
		src: '/images/snake3.png',
		thumbnail: '/images/snake3.png',
		thumbnailWidth: thumbnailWidth,
		isSelected: false,
		caption: 'Snake Game'
	}
];
class Projects extends Component {
	render() {
		return (
			<div>
				<Link to="/">
					<button className="back-button">BACK</button>
				</Link>
				<h2 className="projects-title">MY PROJECTS</h2>
				<div className="project-wrapper">
					<div className="project">
						<h3>Snake!</h3>
						<p>Made using react</p>
						<p>
							Play it here:{' '}
							<a title="Snake" target="_blank" href="https://glowsnake.herokuapp.com/">
								Snake!
							</a>
						</p>
						<div className="gallery-wrapper">
							<small>Click to view photos</small> {' '}
							<Gallery backdropClosesModal="true" images={SNAKEIMAGES} />
						</div>
					</div>
					<div className="project">
						<h3>Tetris</h3>
						<p>Remade tetris using React as the front end with a Rails API</p>
						<p>
							Play it here:{' '}
							<a title="Tetris" target="_blank" href="https://reactetris.herokuapp.com/">
								Tetris
							</a>
						</p>

						<div className="gallery-wrapper">
							<small>Click to view photos</small> {' '}
							<Gallery backdropClosesModal="true" images={TETRISIMAGES} />
						</div>
					</div>
					<div className="project ">
						<h3>MentorMe</h3>
						<p>
							This website allows you to find a mentor by viewing a list of people who have put themselves
							out there as a mentor. Request the mentorship from the mentor. Once it's accepted begin
							chatting and start goal setting!.
						</p>
						<p>React, Rails API</p>
						<div className="gallery-wrapper">
							<small>Click to view photos</small>{' '}
							<Gallery backdropClosesModal="true" images={MENTORIMAGES} />
						</div>
					</div>
					<div className="project">
						<h3>Traccoon</h3>
						<p>A fun app to track raccoons in your neighborhood </p>
						<p>Ruby on Rails, CSS, and HMTL, Google Maps API.</p>
						<div className="gallery-wrapper">
							<small>Click to view photos</small> {' '}
							<Gallery backdropClosesModal="true" images={TRACCOONIMAGES} />
						</div>
					</div>

					<div className="project">
						<h3>GuestBook</h3>
						<p>An app where you can create, comment, and like memories from events you attended.</p>
						<p>Javascript, Rails API</p>
						<div className="gallery-wrapper">
							<small>Click to view photos</small> <Gallery backdropClosesModal="true" images={GBIMAGES} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
