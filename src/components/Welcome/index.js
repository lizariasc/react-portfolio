import React from 'react';

function Welcome() {
  return (
    <section id="about" className="welcome_area p_120">
    <div className="container">
        <div className="row welcome_inner">
            <div className="col-lg-6">
                <div className="welcome_text">
                    <h4>About Myself</h4>
                    <p>Software Engineer with a strong Healthcare background has helped me become a team-oriented, solutions-driven professional with exceptional attention to detail. Effective at combining creativity and complex problem-solving to see projects through completion.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="wel_item">
                                <i className="lnr lnr-book"></i>
                                <h4>18</h4>
                                <p>Total Projects</p>
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