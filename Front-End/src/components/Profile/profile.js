import React, { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';
// import post_modal from './profile-post-modal';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import Coin from '../../assets/coin.png';
import Gem from '../../assets/gem.png'
import Console from '../../assets/console.png';
import Shield from '../../assets/shield.png';
import Diamond from '../../assets/diamond.png';
import Sword from '../../assets/sword.png';

const Profile = () => {
    const location = useLocation();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { id, logged_in, first_name, last_name, email, username, dob, about_me, currency, prof_comp } = location.state.userValues.userValues;

    const axios = require('axios').default;

    useEffect(() => {
           
      });   

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    console.log(user)
    return (
        isAuthenticated && (
            <div className='background-main'>               
                <Header userValues={location.state.userValues.userValues} />

                <ProfilePic>
                    <img
                        className='profile-pic'
                        src={user.picture}
                        alt='profile pic'
                    />
                </ProfilePic>
                <About>
                    <p>{user.given_name}</p>
                    <p>{user.family_name}</p>
                    <p>{username}</p>
                    <p>{user.email}</p>
                    <p>{about_me}</p>
                </About>
                <Post>
                    <form>
                        <label>Post something</label>
                        <input type='text' />
                    </form>
                </Post>
                <Achievements>
                    <h1>Achievements go here</h1>
                    <AwardSword />
                    <AwardGem />
                    <AwardShield />
                    <AwardDiamond />
                    <AwardConsole />
                    <AwardCoin />
                </Achievements>
            </div>
        )
    );
};

const popovergem = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Knows how to Loot</Popover.Header>
        <Popover.Body>
            Loves to take the best treasure, sometimes can be useful with the loot they collect.
        </Popover.Body>
    </Popover>
);
const AwardGem = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popovergem}>
        <img className='avatar-sizes' src={Gem} />
    </OverlayTrigger>
);

const popoversword = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Attack Orientated</Popover.Header>
        <Popover.Body>
            Knows how to put away enemies in little to no time at all.
        </Popover.Body>
    </Popover>
);

const AwardSword = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popoversword}>
        <img className='avatar-sizes' src={Sword} />
    </OverlayTrigger>
);

const popovershield = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">The Tank</Popover.Header>
        <Popover.Body>
            This person will protect you in any situation. Be prepared to heal them.
        </Popover.Body>
    </Popover>
);

const AwardShield = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popovershield}>
        <img className='avatar-sizes' src={Shield} />
    </OverlayTrigger>
);

const popoverdiamond = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Shine Bright like a Diamond</Popover.Header>
        <Popover.Body>
            Loves to be the center of attention in the party, be sure to utlize their networking abilities.
        </Popover.Body>
    </Popover>
);

const AwardDiamond = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverdiamond}>
        <img className='avatar-sizes' src={Diamond} />
    </OverlayTrigger>
);

const popoverconsole = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Timeless Gamer</Popover.Header>
        <Popover.Body>
            Need someone to log hours of grinding with? Well if they have this award then they will grind with you till the break of dawn.
        </Popover.Body>
    </Popover>
);

const AwardConsole = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popoverconsole}>
        <img className='avatar-sizes' src={Console} />
    </OverlayTrigger>
);

const popovercoin = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Big Spender</Popover.Header>
        <Popover.Body>
            Knows how to successfully gain money at all times and will make you rich if you stick with them.
        </Popover.Body>
    </Popover>
);

const AwardCoin = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popovercoin}>
        <img className='avatar-sizes' src={Coin} />
    </OverlayTrigger>
);

const ProfilePic = styled.div``
const About = styled.div``
const Post = styled.div``
const Achievements = styled.div``

export default Profile;
