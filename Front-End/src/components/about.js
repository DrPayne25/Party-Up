import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import { Carousel, Accordion } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";

const About = () => {
    const location = useLocation();
    const { isAuthenticated } = useAuth0();
    if(isAuthenticated){
        return (
            <div className='background-main'>
                <Header userValues={location.state.userValues.userValues} />
                <div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item className='accent-style2' eventKey="1">
                            <Accordion.Header className='accent-style2'>Mission Statement</Accordion.Header>
                            <Accordion.Body className='accent-style'>
                                Party Up, a place where gamers come to get their party and face new challenges together. The whole point of this app is to help
                                gamers connect and showcase their skills and build community. We're glad you're here and ready to Party Up!
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className='accent-style2' eventKey="0">
                            <Accordion.Header className='accent-style2'>What Next?</Accordion.Header>
                            <Accordion.Body className='accent-style'>
                                With this being our Final project we wanted to show our love for gaming which highlighted our love for gaming in general.
                                If this application continues to be woprked on it will be a corner piece to allowing gamers to be apart of a community.
                                We plan to see where things go and if they are successful enough, we'll continue working on this project.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Carousel className='carousel-about'>
                        <Carousel.Item>
                            <img
                                className='about-border'
                                src="https://ca.slack-edge.com/T039KG69K-U01SWH6SL05-611f585ce9cc-512"
                                alt="Alex Payne"
                            />
                            <Carousel.Caption>
                                <h3 className='about-text'>Alex Payne</h3>
                                <p className='about-text'>Work at Flatiron Health as a SaaS Ops Engineer Previously worked at Apple and on a presidential campaign.
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
                                <h3 className='about-text'>Michael Greene</h3>
                                <p className='about-text'>Military Police in the U.S. Army for 9 years.
                                    Drawn to the tech industry from a love of gaming. Loves games designed for solving unique challenges.
                                    Passionate about martial arts and sports competition.
                                    Loves learning new tools to streamline development experience.
    
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
                                <h3 className='about-text'>Minhang Xie</h3>
                                <p className='about-text'>Background in Neuroscience and Oncology Research. Passionate about creating elegant code to solve unique problems. Always looking for opportunities to improve as a programmer. 
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
                                <h3 className='about-text'>Connor Boyce</h3>
                                <p className='about-text'>Worked at Apple as a computer tech and Gcoop a wellness products company.
                                    Interested in web development, AI learning, and front/back end development.
                                    I’m one to always be willing to learn more to further develop a prominent career within tech. My true passion lies with the pursuit of knowledge and the linear progression correlation of better living.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
    return (
        <div className='background-main'>
            <Header />
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
