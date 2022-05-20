import React from 'react';
import { NavLink } from "react-router-dom";
import AuthenticationButton from './auth-button';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";

const Header = userValues => {
	const { isAuthenticated } = useAuth0();

	if(isAuthenticated){
		return (
			<div>
				<Nav>
					<nav>
						<NavListWrap>
							<img
							className='party-up-logo'
							alt='logo'
							src='https://user-images.githubusercontent.com/81993283/169421631-d8353320-6dc2-4bd1-b1fa-3f8dd4ac9d54.png'
							alt=''
							/>
							<NavList>
								<NavLink
									to="/"
									state={{ userValues: userValues }}
									className="nav-link"
								>
									My Feed
								</NavLink>
							</NavList>
							<NavList>
								<NavLink
									to="/profile"
									state={{ userValues: userValues }}
									className="nav-link"
								>
									My Profile
								</NavLink>
							</NavList>
							<NavList>
								<NavLink
									to="/chat"
									state={{ userValues: userValues }}
									className="nav-link"
								>
									Chat
								</NavLink>
							</NavList>
							<NavList>
								<NavLink
									to="/about"
									state={{ userValues: userValues }}
									className="nav-link"
								>
									About
								</NavLink>
							</NavList>
							<NavList>
								<div>
									<AuthenticationButton userValues={userValues} />
								</div>
							</NavList>
						</NavListWrap>
					</nav>
				</Nav>
			</div>
		)
	}else{
		return (
			<div>
				<Nav>
					<nav>
						<NavListWrap>
							<img
							className='party-up-logo'
							alt='logo'
							src='https://user-images.githubusercontent.com/81993283/169421631-d8353320-6dc2-4bd1-b1fa-3f8dd4ac9d54.png'
							alt=''
							/>
							<NavList>
								<NavLink
									to="/"
									className="nav-link"
								>
									Home
								</NavLink>
							</NavList>						
							<NavList>
								<NavLink
									to="/about"
									className="nav-link"
								>
									About
								</NavLink>
							</NavList>
							<NavList>
								<div>
									<AuthenticationButton />
								</div>
							</NavList>
						</NavListWrap>
					</nav>
				</Nav>
			</div>
		)
	}
	
}

const Nav = styled.nav`
	margin-left: auto;
	display: block;
	@media (max-width: 768px) {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
	}
`;

const NavListWrap = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	list-style-type: none;
	justify-content: space-between;
	.active {
		span::after {
			content: "";
			transform: scaleX(1);
			border-bottom: 2px solid var(--white, #fff);
			position: absolute;
			left: 0;
			bottom: 0;
			transition: transform 0.2s ease-in-out;
			width: 100%;
			border-color: rgba(0, 0, 0, 0.9);
		}
	}
`;

const NavList = styled.li`
	display: flex;
	align-items: center;
	a {
		align-items: center;
		background: transparent;
		display: flex;
		flex-direction: column;
		font-size: 20px;
		font-weight: 400;
		justify-content: center;
		line-height: 1.5;
		min-height: 52px;
		min-width: 80px;
		position: relative;
		text-decoration: none;
		span {
			color: rgba(0, 0, 0, 0.6);
			display: flex;
			align-items: center;
			text-align: center;
		}
		@media (max-width: 768px) {
			min-width: 50px;
			font-size: 9px;
			span > img {
				width: 40%;
			}
		}
	}
	&:hover,
	&:active {
		a {
			span {
				color: rgba(0, 0, 0, 0.9);
			}
		}
	}
`;

export default Header
