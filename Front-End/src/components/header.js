import React from 'react';
import { NavLink, Navigate } from "react-router-dom";
import AuthenticationButton from './auth-button';
import styled from 'styled-components';

const Header = () => {
	return (
		<div>
			<Nav>
				<nav>
					<NavListWrap>
						<NavList>
							<Search>
								<div>
									<input type="text" placeholder="Search" />
								</div>
							</Search>
						</NavList>
						<NavList>
							<NavLink
								to="/"
								exact
								className="nav-link"
								activeClassName="router-link-exact-active"
							>
								Home
							</NavLink>
						</NavList>
						<NavList>
							<NavLink
								to="/profile"
								exact
								className="nav-link"
								activeClassName="router-link-exact-active"
							>
								My Profile
							</NavLink>
						</NavList>
						<NavList>
							<NavLink
								to="/feed"
								exact
								className="nav-link"
								activeClassName="router-link-exact-active"
							>
								My Feed
							</NavLink>
						</NavList>
						<NavList>
							<NavLink
								to="/friends"
								exact
								className="nav-link"
								activeClassName="router-link-exact-active"
							>
								Friends
							</NavLink>
						</NavList>
						<NavList>
							<NavLink
								to="/about"
								exact
								className="nav-link"
								activeClassName="router-link-exact-active"
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

// const Container = styled.div`
//     background-color: gray;
// 	padding: 0 24px;
// 	position: sticky;
// 	top: 0;
// 	left: 0;
// 	/* width: 100vw; */
// 	z-index: 10;
// `
// const Content = styled.div`
// 	display: flex;
// 	align-items: center;
// 	margin: 0 auto;
// 	height: 100%;
// 	max-width: 1128px;
// `;

const Search = styled.div`
	opacity: 1;
	flex-grow: 1;
	position: relative;
	@media (max-width: 768px) {
		flex-grow: unset;
	}
	& > div {
		max-width: 480px;
		input {
			border: none;
			box-shadow: none;
			background-color: #eef3f8;
			border-radius: 2px;
			color: rgba(0, 0, 0, 0.9);
			width: 420px;
			padding: 0 8px 0 40px;
			line-height: 1.75;
			font-weight: 400;
			font-size: 14px;
			height: 34px;
			vertical-align: text-top;
			border-color: #dce6f1;
			@media (max-width: 768px) {
				width: 140px;
			}
		}
	}
`;

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
		font-size: 12px;
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
