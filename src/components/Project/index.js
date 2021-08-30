import React from 'react'; 

// Individual Cards 
function ProjectCards(props) {
    return (

        <div className="container">
            <div className="gallery_f_inner imageGallery1">
                <div className="col-lg-8 col-md-4 col-sm-6 brand manipul design print">
                    <div className="h_gallery_item">
                        <div className="g_img_item">
                            <img className="img-fluid" alt={props.name} src={props.image}></img>
                            <a className="light" href={props.image}><img src="img/gallery/icon.png" alt={props.name}></img></a>
                        </div>
                        <div className="g_item_text">
                            <h4><a href={props.deploy}>{props.name}</a></h4>
                            <p><a href={props.github}>GitHub</a></p>
                        </div>
                    </div>
                </div>
      </div>
      </div>
      
    );
}
  
  export default ProjectCards;