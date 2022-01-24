import React, { useState } from 'react';
import Pagination from '../pagination/pagination.component';

function Card({ launches_site_name }) {

  const totalLaunchesOnSite = launches_site_name.launch_site_arr;

  const [launches] = useState(totalLaunchesOnSite);
  const [currentPage, setCurrentPage] = useState(1);
  const [launchesPerPage] = useState(10);

  // Get current launches
  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunch = launches.slice(indexOfFirstLaunch, indexOfLastLaunch);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <div className="grid">
        {
          currentLaunch.map(({ mission_name, details, links, rocket, launch_date_unix }) => (
            <div>
              <div className="card">
                <img src={ links.flickr_images } loading="lazy" alt={ rocket.rocket_name } className="card-image-background" />
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
      </div>
      <Pagination launchesPerPage={launchesPerPage} totalLaunches={totalLaunchesOnSite.length} paginate={paginate} currentPage={currentPage} />
    </>
  )
}

export default Card;