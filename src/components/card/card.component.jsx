import React, { useState, useEffect } from 'react';
import Pagination from '../pagination/pagination.component';

function Card({ launch_site }) {

  const totalLaunchesOnSite = launch_site.launch_site_arr;

  const [allLaunches] = useState(totalLaunchesOnSite);
  const [currentPage, setCurrentPage] = useState(1);
  const [launchesPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  
  // Get saved page number
  useEffect(() => {
    setLoading(true);
    if (localStorage.getItem(launch_site.tab_name)) {
      setCurrentPage(parseInt(localStorage.getItem(launch_site.tab_name)));
    } 
    setLoading(false);
  }, [])

  // Get current launches
  const indexOfLastLaunch = currentPage * launchesPerPage;
  const indexOfFirstLaunch = indexOfLastLaunch - launchesPerPage;
  const currentLaunch = allLaunches.slice(indexOfFirstLaunch, indexOfLastLaunch);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    localStorage.setItem(launch_site.tab_name, pageNumber)
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
                    <p><span className="card-details-title">Launched On:</span> <br/> { new Date(launch_date_unix * 1000).toString() } </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      {
        loading ? 
          null
        :
          <Pagination 
            launchesPerPage={launchesPerPage} 
            totalLaunches={totalLaunchesOnSite.length} 
            paginate={paginate} 
            currentPage={currentPage} 
          />
      }
    </>
  )
}

export default Card;