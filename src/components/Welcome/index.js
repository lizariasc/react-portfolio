import React from 'react';

function Welcome() {
  return (
    <section class="welcome_area p_120">
    <div class="container">
        <div class="row welcome_inner">
            <div class="col-lg-6">
                <div class="welcome_text">
                    <h4>About Myself</h4>
                    <p>Software Engineer with a strong Healthcare background has helped me become a team-oriented, solutions-driven professional with exceptional attention to detail. Effective at combining creativity and complex problem-solving to see projects through completion.</p>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="wel_item">
                                <i class="lnr lnr-book"></i>
                                <h4>18</h4>
                                <p>Total Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="tools_expert">
                    <div class="skill_main">
                        <div class="skill_item">
                            <h4>HTML <span class="counter">95</span>%</h4>
                            <div class="progress_br">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill_item">
                            <h4>CSS <span class="counter">95</span>%</h4>
                            <div class="progress_br">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill_item">
                            <h4>JavaScript <span class="counter">90</span>%</h4>
                            <div class="progress_br">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill_item">
                            <h4>MERN <span class="counter">85</span>%</h4>
                            <div class="progress_br">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div class="skill_item">
                            <h4>MySQL <span class="counter">75</span>%</h4>
                            <div class="progress_br">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
  );
}

export default Welcome;