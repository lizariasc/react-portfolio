import React from 'react';

function About() {
  return (
     <section className="home_banner_area">
           	<div className="container box_1620">
           		<div className="banner_inner d-flex align-items-center">
					<div className="banner_content">
						<div className="media">
							<div className="d-flex">
								<img src="img/personal.jpg" alt=""></img>
							</div>
							<div className="media-body">
								<div className="personal_text">
									<h6>Hello Everybody, i am</h6>
									<h3>Liz Arias</h3>
									<h4>Software Engineer</h4>
									<ul className="list basic_info">
										<li><i className="lnr lnr-envelope"></i> lizethariasc14@gmail.com</li>
										<li><i className="lnr lnr-home"></i> Los Angeles, CA</li>
									</ul>
									<ul className="list personal_social">
										<li><a href="https://github.com/lizariasc"><i className="fa fa-github"></i></a></li>
										<li><a href="https://www.linkedin.com/in/liz-arias/"><i className="fa fa-linkedin"></i></a></li>
									</ul>
								</div>
							</div>
							
						</div>
					</div>
				</div>
            </div>
            </section>
            
  );
}

export default About;