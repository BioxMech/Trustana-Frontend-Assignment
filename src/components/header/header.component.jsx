import React from 'react';

import TabGroup from "../tabs/tabGroup.component";
import './header.css';
import TAB_DATA from './tab.data';

function Header() {

  return (
    <div>
      <TabGroup>
        {
          TAB_DATA.map((tab) => {
            return (
              <div label={ tab.title }>
                <div className="content">
                  <div className="content-catelog">Catelog</div>
                  <div className="content-title">{ tab.title }</div>
                  <div className="grid">
                      {
                        tab.products.map(product => (
                          <div>
                          <div className="card">
                            <div className="card-image-background">
                              <img src={ product.image } alt={ product.image } className="card-image" />
                            </div>
                            
                            <div className="card-content">
                              <div className="card-title">{ product.productTitle }</div>
                              <div className="card-details">
                                <p>{ product.units }</p>
                                <p>{ product.price }</p>
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