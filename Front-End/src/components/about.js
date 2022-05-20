import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import { Carousel, Accordion } from 'react-bootstrap';

const About = () => {
    const location = useLocation();

    return (
        <div className='background-main'>
            <Header userValues={location.state.userValues.userValues} />
            <div>
                <Carousel className='carousel-about'>
                    <Carousel.Item>
                        <img
                            className='about-border'
                            src="https://ca.slack-edge.com/T039KG69K-U01SWH6SL05-611f585ce9cc-512"
                            alt="Alex Payne"
                        />
                        <Carousel.Caption>
                            <h3 className='about-text1'>Alex Payne</h3>
                            <p className='about-text1'>Work at Flatiron Health as a SaaS Ops Engineer Previously worked at Apple and on a presidential campaign.
                                Very interested in automation and ways to use computers to simplify big problems.
                                Have a passion for learning new things, video games, and problem.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='about-border'
                            src="https://ca.slack-edge.com/T039KG69K-U0145ALB10T-0a9f3787d574-512"
                            alt="Michael Greene"
                        />

                        <Carousel.Caption>
                            <h3 className='about-text1'>Michael Greene</h3>
                            <p className='about-text1'>Work at Flatiron Health as a SaaS Ops Engineer Previously worked at Apple and on a presidential campaign
                                Very interested in automation and ways to use computers to simplify big problems
                                Have a passion for learning new things, video games, and problem
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='about-border'
                            src="https://ca.slack-edge.com/T039KG69K-U02DNB5R0BH-8c4b9c9b855f-512"
                            alt="Minhang Xie"
                        />

                        <Carousel.Caption>
                            <h3 className='about-text1'>Minhang Xie</h3>
                            <p className='about-text1'>Worked at Apple as a computer tech and Gcoop a wellness products company.
                                Interested in web development, AI learning, and front/back end development.
                                I’m one to always be willing to learn more to further develop a prominent career within tech. My true passion lies with the pursuit of knowledge and the linear progression correlation of better living.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='about-border'
                            src="https://ca.slack-edge.com/T039KG69K-U01TKNJJDND-b2cda6868679-512"
                            alt="Connor Boyce"
                        />
                        <Carousel.Caption>
                            <h3 className='about-text1'>Connor Boyce</h3>
                            <p className='about-text1'>Worked at Apple as a computer tech and Gcoop a wellness products company.
                                Interested in web development, AI learning, and front/back end development.
                                I’m one to always be willing to learn more to further develop a prominent career within tech. My true passion lies with the pursuit of knowledge and the linear progression correlation of better living.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='box1'>
                <h2 className='about-title'>Mission Statement</h2>
                <p className='about-text'>
                    Party Up, a place where gamers come to get their party and face new challenges together. The whole point of this app is to help
                    gamers connect and showcase their skills and build community. We're glad you're here and ready to Party Up!
                </p>
                <h2 className='about-title'>What's Next?</h2>
                <p className='about-text'>
                    With this being our Final project we wanted to show our love for gaming which highlighted our love for gaming in general.
                    If this application continues to be woprked on it will be a corner piece to allowing gamers to be apart of a community.
                    We plan to see where things go and if they are successful enough, we'll continue working on this project
                </p>
            </div>
        </div>
    )
}

export default About
