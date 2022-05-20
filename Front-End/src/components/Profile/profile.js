import React, { useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';
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
    const { first_name, last_name, username, about_me } = location.state.userValues.userValues;
    // const { id, logged_in, first_name, last_name, email, username, dob, about_me, currency, prof_comp } = location.state.userValues.userValues;


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

                <About className='about-user'>
                    <ProfilePic>
                        <img
                            className='profile-pic'
                            src={user.picture}
                            alt='profile pic'
                        />
                    </ProfilePic>
                    <p className='profile-info'>Name: {first_name}</p>
                    <p className='profile-info'>Last: {last_name}</p>
                    <p className='profile-info'>Username: {username}</p>
                    <p className='profile-info'>Email: {user.email}</p>
                    <p className='profile-info'>About Me: {about_me}</p>
                </About>
                <Achievements>
                    <h1 className='achievements-title'>Achievements</h1>
                    <div className='avatar-row'>
                        <AwardSword />
                        <AwardGem />
                        <AwardShield />
                    </div>
                    <div className='avatar-row'>
                        <AwardDiamond />
                        <AwardConsole />
                        <AwardCoin />
                    </div>
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
        <img className='avatar-sizes' alt='gem' src={Gem} />
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
        <img className='avatar-sizes' alt='sword' src={Sword} />
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
        <img className='avatar-sizes' alt='shield' src={Shield} />
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
        <img className='avatar-sizes' alt='diamond' src={Diamond} />
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
        <img className='avatar-sizes' alt='console' src={Console} />
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
        <img className='avatar-sizes' alt='coin' src={Coin} />
    </OverlayTrigger>
);

const ProfilePic = styled.div``
const About = styled.div``
const Achievements = styled.div``

export default Profile;
