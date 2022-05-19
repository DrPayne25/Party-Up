import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import { Carousel } from 'react-bootstrap'

const About = () => {
    const location = useLocation();

    return (
        <div className='about-main'>
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
                            <h3 className='about-text'>Alex Payne</h3>
                            <p className='about-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        <p className='about-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
                            <p className='about-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default About
