import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';

import TabGroup from "../tabs/tabGroup.component";
import './header.css';
import TAB_DATA from './tab.data';

const GET_LAUNCHES = gql`
  {
    launchesPast {
      mission_name
      launch_site {
        site_name_long
      }
      links {
        flickr_images
      }
      rocket {
        rocket_name
      }
      launch_date_unix
    }
  }
`;

function Header() {

  const { errors, loading, data } = useQuery(GET_LAUNCHES);
  const getRandomImg = imgs => imgs[Math.floor(Math.random() * imgs.length)];

  const launches = {
    "Cape Canaveral Air Force Station Space Launch Complex 40" : { "tab_name" : "CCAFS SLC 40", "launch_site_arr": [] },
    "Vandenberg Air Force Base Space Launch Complex 4E" : { "tab_name" : "VAFB SLC 4E", "launch_site_arr": [] },
    "Kennedy Space Center Historic Launch Complex 39A" : { "tab_name" : "KSC LC 39A", "launch_site_arr": [] }
  }

  if (data) {
    data.launchesPast.map((launch) => {
      const found = launch.launch_site.site_name_long in launches;
      if (found && launches[launch.launch_site.site_name_long].launch_site_arr.length < 10) {
        launches[launch.launch_site.site_name_long].launch_site_arr.push(launch)
      }
      return null;
    });
  }

  return (
    errors ? 
      "GraphQL Error!" 
    : loading ?
      "Loading..."
    :
      <div>
        <TabGroup>
          {
            Object.keys(launches).map((site_name, idx) => {
              return (
                <div label={ launches[site_name].tab_name } key={ launches[site_name].tab_name }>
                  <div className="content">
                    <div className="content-catelog">Past Space X Launches</div>
                    <div className="content-title">{ site_name }</div>
                    <div className="grid">
                      {
                        launches[site_name].launch_site_arr.map(({ mission_name, details, links, rocket, launch_date_unix }) => (
                          <div>
                            <div className="card">
                              {/* <div className="card-image-background">
                                <img src={ links.flickr_images } alt="..." className="card-image" />
                              </div> */}
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
                    </div>
                  </div>
                </div>
              )
            })
          }
        </TabGroup>
      </div>
      
  )
}

export default Header;