import React from 'react';

import TabGroup from "../tabs/tabGroup.component";
import './header.css';

import P1 from '../../assets/product1.svg';
import P2 from '../../assets/product2.svg';
import P3 from '../../assets/product3.svg';

function Header() {

  return (
    <div>
      <TabGroup>
        {/* <CardGroup /> */}
        <div label="Korean Products">
          <div className="content">
            <div className="content-catelog">Catelog</div>
            <div className="content-title">Korean Products</div>
            <div className="grid">
              <div> 
                <div className="card">
                  <div className="card-image-background">
                    <img src={P1} alt="P1" className="card-image" />
                  </div>
                  
                  <div className="card-content">
                    <div className="card-title">Product 1</div>
                    <div className="card-details">
                      <p>MDQ 2D Units</p>
                      <p>SGD 4.50 /carton</p>
                    </div>
                  </div>
                </div>
              </div>
              <div> 
                <div className="card">
                  <div className="card-image-background">
                    <img src={P2} alt="P2" className="card-image" />
                  </div>
                  
                  <div className="card-content">
                    <div className="card-title">Product 2</div>
                    <div className="card-details">
                      <p>MDQ 2D Units</p>
                      <p>SGD 4.50 /carton</p>
                    </div>
                  </div>
                </div>
              </div>
              <div> 
                <div className="card">
                  <div className="card-image-background">
                    <img src={P3} alt="P3" className="card-image" />
                  </div>
                  
                  <div className="card-content">
                    <div className="card-title">Product 3</div>
                    <div className="card-details">
                      <p>MDQ 2D Units</p>
                      <p>SGD 4.50 /carton</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div label="Chinese Products">
          <div className="content">
            <div className="content-catelog">Catelog</div>
            <div className="content-title">Chinese Products</div>
            <div className="grid">
              <div> 
                <div className="card">
                  <div className="card-image-background">
                    <img src={P1} alt="P1" className="card-image" />
                  </div>
                  
                  <div className="card-content">
                    <div className="card-title">Product 1</div>
                    <div className="card-details">
                      <p>MDQ 2D Units</p>
                      <p>SGD 4.50 /carton</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div label="Japanese Products">
          <div className="content">
            <div className="content-catelog">Catelog</div>
            <div className="content-title">Japanese Products</div>
            <div className="grid">
              <div> 
                <div className="card">
                  <div className="card-image-background">
                    <img src={P1} alt="P1" className="card-image" />
                  </div>
                  
                  <div className="card-content">
                    <div className="card-title">Product 1</div>
                    <div className="card-details">
                      <p>MDQ 2D Units</p>
                      <p>SGD 4.50 /carton</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabGroup>
    </div>
  )
}

export default Header;