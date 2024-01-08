import React from 'react';
import './Picbox.css';

import board from '../../assets/board.jpg';
import leg from '../../assets/leg.jpg';
import map from '../../assets/map.jpg';
import pass from '../../assets/pass.jpg';
import some from '../../assets/some.jpg';
import tree from '../../assets/tree.jpg';

function Picbox() {
  return (
    <div>
      <div className="row">
        <div className="column">
          <img src={board} alt="Board" />
          <img src={leg} alt="Leg" />
        </div>
        <div className="column">
          <img src={map} alt="Map" />
          <img src={pass} alt="Pass" />
        </div>
        <div className="column">
          <img src={some} alt="Some" />
          <img src={tree} alt="Tree" />
        </div>
        <div className="column">
          <img src={map} alt="Map" />
          <img src={pass} alt="Pass" />
        </div>
      </div>
      <button className='bt2'>Show more</button>
    </div>
  );
}

export default Picbox;
