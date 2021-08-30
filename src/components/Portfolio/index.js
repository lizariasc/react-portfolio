import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section id="portfolio" className="home_gallery_area p_120">
        <div className="container">
            <div className="main_title">
                <h2>Portfolio</h2>
                <p>My lastest Projects</p>
            </div>
        </div>
        <Wrapper className="container">
            
        {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy}/>
            ))}
                   

        </Wrapper>
    </section>
    
    );
  }
  export default Portfolio;