import React from 'react';

function Tabs() {
  return (
<section class="mytabs_area p_120">
        	<div class="container">
        		<div class="tabs_inner">
					<ul class="nav nav-tabs" id="myTab" role="tablist">
						<li class="nav-item">
							<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Experiences</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Education</a>
						</li>
					</ul>
					<div class="tab-content" id="myTabContent">
						<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<ul class="list">
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>March 2020 to present</p>
										</div>
										<div class="media-body">
											<h4>Pasadena Nephrology Corporation</h4>
											<p>Clinical Assistant <br />Pasadena, California</p>
										</div>
									</div>
								</li>
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>Aug 2019 to Feb 2020</p>
										</div>
										<div class="media-body">
											<h4>Dr. Edward Chen OB/GYN</h4>
											<p>Clinical Assistant <br />Los Angeles, California</p>
										</div>
									</div>
								</li>
								<li>
								<span></span>
									<div class="media">
										<div class="d-flex">
											<p>Jan 2018 to Aug 2019</p>
										</div>
										<div class="media-body">
											<h4>BioEvolution</h4>
											<p>Physical Therapist <br />Guadalajara, Mexico</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
							<ul class="list">
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>Abril 2021 to present</p>
										</div>
										<div class="media-body">
											<h4>University of California, Los Angeles</h4>
											<p>Full Stack Software Engineering <br />Los Angeles, California</p>
										</div>
									</div>
								</li>
								<li>
									<span></span>
									<div class="media">
										<div class="d-flex">
											<p>Aug 2018 to Aug 2019</p>
										</div>
										<div class="media-body">
											<h4>Universidad Autonoma de Guadalajara</h4>
											<p>Obstetrics and Neonatology <br />Postgraduate degree</p>
										</div>
									</div>
								</li>
								<li>
								<span></span>
									<div class="media">
										<div class="d-flex">
											<p>Jan 2015 to Jan 2019</p>
										</div>
										<div class="media-body">
											<h4>Universidad Autonoma de Guadalajara</h4>
											<p>Physical Therapy <br />Bachelor of Science</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
        		</div>
        	</div>

			

        </section>
          );
        }
        
        export default Tabs;