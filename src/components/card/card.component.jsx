import React from 'react';

function Card({ launches_site_name }) {

  return (
    <>
      {
        launches_site_name.launch_site_arr.map(({ mission_name, details, links, rocket, launch_date_unix }) => (
          <div>
            <div className="card">
              <img src={ links.flickr_images } alt="..." className="card-image-background" />
              <div className="card-content">
                <div className="card-title">{ mission_name }</div>
                <div className="card-details">
                  <p><span className="card-details-title">Rocket Name:</span> <br /> { rocket.rocket_name }</p>
                  <p><span className="card-details-title">Launched On:</span> <br/> { new Date(launch_date_unix).toString() } </p>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Card;