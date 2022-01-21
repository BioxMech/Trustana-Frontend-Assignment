import React from 'react';

import TabGroup from "../tabs/tabGroup.component";
import './header.css';

import Logo from '../../assets/logo.svg';

function Header() {
  return (
    <div>
      <TabGroup>
        <div label="Korean Products">
          <div className="catelog">Catelog</div>
          <div className="catelog-title">Korean Products</div>

        </div>
        <div label="Chinese Products">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Japanese Products">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </TabGroup>
    </div>
  )
}

export default Header;