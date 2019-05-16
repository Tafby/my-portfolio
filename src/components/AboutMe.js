import React, { Component } from 'react';

class AboutMe extends Component {
	render() {
		return (
			<div className="resume-container">
				<h2 className="resume-name">TIFFANY CARTER</h2>
				<p>Seattle, WA</p>
				<div className="line"> </div>

				<p className="resume-text">
					<h3 className="titles">SUMMARY</h3> Full stack web developer with a passion for creativity and
					problem solving. With experience in Ruby on Rails, JavaScript, and React and a background in
					Recruiting, I discovered web development through Recruiting.
				</p>
				<p className="titles">Skills: Ruby, Rails, Javascript, React, Basics of Java and Python, </p>
				<p>
					<h3 className="titles">WORKING EXPERIENCE</h3>
					<div className="line" />
				</p>
				<h3 className="blue">Avvo, Seattle</h3>
				<p className="resume-text">
					<b>Corporate Recruiter</b>
					<br />
					<small>January 2015 - September 2016</small> <br />
					Worked with managers throughout the company in hiring candidates specifically for their department.
					Those departments included IT, Sales, HR, Recruiting, Customer Care, Finance and some tech roles
					Worked with each candidate throughout the entire interview process Sorted through resumes, phone
					screened, and conducted a closing interview with each candidate at the end of interview loop Sourced
					on LinkedIn and kept up with posted jobs descriptions on Craiglist, Indeed, and Glassdoor
				</p>
				<p className="resume-text">
					<b>Sales Operations Coordinator</b>
					<br />
					<small>October 2013 - December 2015</small>
					<br />
					Worked with the development team to make our in-house sales tool run smoothly, and also give input
					to create a new in-house sales tool Resolve operational issues that arise throughout the sales
					department. Schedule interviews for sales and work with the HR and IT departments to set up new hire
					computers, and accounts Book travel arrangements for sales department trade shows
				</p>
				<p className="resume-text">
					<b>Customer Care Representative</b>
					<br />
					<small>April 2013 - October 2013</small>
					<br /> Provided assistance and support to the consumers and attorneys who utilize the site Worked
					with the product and development team to discuss user feedback and bugs - ways we can improve
					usability from both a consumer and administrative perspective, and formulate new product ideas Used
					ZenDesk to track email, telephone, and chat correspondence for customer care tickets; also tracked
					and administered internal requests from account managers and other departments
				</p>
				<p className="resume-text">
					<b>Content Acquisition Team Lead</b> <br />
					<small>February 2012 - April 2013</small>
					<br />
					Managed a team of content acquisition technicians, evaluating their performance and ensuring all
					data entry goals were made by the team Researched and input content of lawyers (licensed
					nationwide), providing their history/experience etc. in Avvo's directory Promoted to team lead in
					September 2012
				</p>
				<p>
					<h3 className="titles">EDUCATION</h3>
					<div className="line"> </div>
				</p>
				<p className="blue">FlatIron School, Seattle WA January 2019 - May 2019 </p>
				<p className="blue">
					Shoreline Community College, Seattle WA — Associate in Arts September 2016 - May 2018
				</p>
				<p className="blue"> Continuing Education Certificate from University of Washington 2015</p>
			</div>
		);
	}
}

export default AboutMe;
