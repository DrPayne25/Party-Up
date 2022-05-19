import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import Coin from '../../assets/coin.png';
import Gem from '../../assets/gem.png'
import Console from '../../assets/console.png';
import Shield from '../../assets/shield.png';
import Diamond from '../../assets/diamond.png';
import Sword from '../../assets/sword.png';

const popoversword = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Attack Orientated</Popover.Header>
    <Popover.Body>
      Knows how to put away enemies in little to no time at all. 
    </Popover.Body>
  </Popover>
);

const AwardSword = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popoversword}>
    <img src={Sword}/>
  </OverlayTrigger>
);

const popovergem = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Attack Orientated</Popover.Header>
    <Popover.Body>
      Knows how to put away enemies in little to no time at all. 
    </Popover.Body>
  </Popover>
);

const AwardGem = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popovergem}>
    <img src={Gem}/>
  </OverlayTrigger>
);

export default AwardSword; AwardGem;
