import React from 'react';

function Footer() {
  return (
<footer className="footer_area p_100">
<div className="container">
    <div className="row footer_inner">
        <div className="col-lg-4">
            <aside className="f_widget social_widget">
                <div className="f_title">
                    <h3>Follow Me</h3>
                </div>
                <ul className="list">
                    <li><a href="https://github.com/lizariasc"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/liz-arias/"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </aside>
        </div>
    </div>
</div>
</footer>
    );
}

export default Footer;