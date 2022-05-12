import React from 'react';
import styled from 'styled-components'
import Form from './LandingForm'

const Landing = () => {
    return (
        <Container>
            <Nav>
                <a href='/'>
                    <img src='http://placekitten.com/135/45' alt=''/>
                </a>
                <div>
                    <About>About</About>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Party Up!</h1>
                    <img src='http://placekitten.com/700/670' alt='' />
                </Hero>
                <Form />
            </Section>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.div`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items:center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    background-color: gray
`;

const About = styled.div`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.5)
    }
`

const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
		min-height: 0;
	}
`

const Hero = styled.div`
    width: 100%;
    h1 {
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px) {
			text-align: center;
			width: 100%;
			font-size: 20px;
			line-height: 2;
		}
    }
    img {
        z-index: -1;
		width: 500px;
		height: 570px;
		position: absolute;
		bottom: -2px;
        right: 150;
		@media (max-width: 768px) {
			top: 230px;
			position: initial;
			width: initial;
			height: initial;
		}
    }
`

export default Landing;