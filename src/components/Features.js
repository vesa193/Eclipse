import React, { Component } from 'react'

import './Features.sass'

class Features extends Component {
    render() {
        return(
            <div className="Features">
                <div className="Features__wrap">
                    <h3>OUR DESIN GUIDELINES</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br/> enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                    <ul className="Features__links">
                        <li><a href="#">DEVELOPMENT</a></li>
                        <li><a className="Features__link Features__link--active" href="#">DESIGN</a></li>
                        <li><a href="#">BUSINESS</a></li>
                        <li><a href="#">ARTS</a></li>
                    </ul>
                    
                    <div className="Features__cards">
                        <div className="Features__card">
                            <div className="Features__card__overlay"></div>

                            <img className="Features__card__img" src={require('./img/feature.jpg')} alt=""/>

                            <div className="Features__card__desc">
                                <h5>DESIGN LISTING ONE</h5>
                                <img src={require('./img/arrow-right2.png')} alt=""/>
                            </div>
                        </div>

                        <div className="Features__card">
                            <div className="Features__card__overlay"></div>
                            <img className="Features__card__img" src={require('./img/feature.jpg')} alt=""/>

                            <div className="Features__card__desc">
                                <h5>DESIGN LISTING ONE</h5>
                                <img src={require('./img/arrow-right2.png')} alt=""/>
                            </div>
                        </div>

                        <div className="Features__card">
                            <div className="Features__card__overlay"></div>
                            <img className="Features__card__img" src={require('./img/feature.jpg')} alt=""/>

                            <div className="Features__card__desc">
                                <h5>DESIGN LISTING ONE</h5>
                                <img src={require('./img/arrow-right2.png')} alt=""/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Features